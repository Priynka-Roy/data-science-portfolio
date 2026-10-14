"""Rebuild the privacy-reviewed public CV. Requires reportlab, not private source files."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/resume/priynka-roy-cv.pdf"
NAVY = colors.HexColor("#11243A")
TEAL = colors.HexColor("#117A78")
MUTED = colors.HexColor("#526174")
BODY = colors.HexColor("#253346")
STYLES = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=29,
                           leading=34, textColor=NAVY, spaceAfter=7),
    "headline": ParagraphStyle("headline", fontName="Helvetica", fontSize=12,
                               leading=17, textColor=TEAL, spaceAfter=8),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9,
                              leading=14, textColor=MUTED, spaceAfter=13),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11,
                              leading=16, textColor=TEAL, spaceBefore=13, spaceAfter=8),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=11.3,
                            leading=15, textColor=NAVY, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10.4,
                           leading=15, textColor=BODY, spaceAfter=7,
                           alignment=TA_LEFT),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=9.6,
                           leading=14, textColor=MUTED, spaceAfter=6),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=10.2,
                             leading=14.5, textColor=BODY, leftIndent=10,
                             firstLineIndent=-10, spaceAfter=5),
}


def p(text, style="body"):
    return Paragraph(text, STYLES[style])


def link(label, url):
    return f'<a href="{url}" color="#117A78">{label}</a>'


def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(colors.HexColor("#DBE3EB"))
    canvas.line(20 * mm, 17 * mm, width - 20 * mm, 17 * mm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(20 * mm, 12 * mm, "Priynka Roy | Statistics, data science & industrial analytics")
    canvas.drawRightString(width - 20 * mm, 12 * mm, f"{doc.page} / 2")
    canvas.restoreState()


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=20 * mm,
                            leftMargin=20 * mm, topMargin=19 * mm,
                            bottomMargin=24 * mm,
                            title="Priynka Roy - Curriculum Vitae",
                            author="Priynka Roy",
                            subject="Public professional profile and independent data science projects")
    story = [
        p("Priynka Roy", "name"),
        p("MSc Statistics Student | Data Science &amp; Machine Learning<br/>Industrial Analytics", "headline"),
        p("Turku, Finland | " + link("priynka470@gmail.com", "mailto:priynka470@gmail.com")
          + "<br/>" + link("GitHub", "https://github.com/Priynka-Roy") + " &nbsp; | &nbsp; "
          + link("LinkedIn", "https://linkedin.com/in/priynka-roy-b37757342") + " &nbsp; | &nbsp; "
          + link("Google Scholar", "https://scholar.google.com/citations?user=ykybeRMAAAAJ&amp;hl=en"), "contact"),
        p("PROFILE", "section"),
        p("Master's student in Mathematics and Statistics at the University of Turku, specializing in Statistics. "
          "A background in statistical research and independent Python projects supports my interests in "
          "time-series analysis, machine learning, and industrial decision support. Seeking opportunities "
          "in data science, statistical analytics, and energy or equipment analytics."),
        p("SELECTED INDEPENDENT PROJECTS", "section"),
        p("IndustrialGuard AI", "title"),
        p("Explainable equipment condition monitoring | Python, scikit-learn, Streamlit", "meta"),
        p("- Built an eight-section application using real MetroPT-3 compressor telemetry, with causal "
          "time-series features, robust statistics, regularized covariance monitoring, and Isolation Forest.", "bullet"),
        p("- Compared frozen monitoring policies chronologically; exposed alert burden, operating-regime "
          "effects, and feature deviations. Sparse historical failures limit conclusions about prediction.", "bullet"),
        p(link("Source code & methodology", "https://github.com/Priynka-Roy/industrialguard-explainable-predictive-maintenance")
          + " &nbsp; | &nbsp; " + link("Live application", "https://industrialguard-predictive-maintenance-fm5zvs3pfvs.streamlit.app/"), "meta"),
        Spacer(1, 8),
        p("EnerTwin AI", "title"),
        p("Industrial energy forecasting & constrained scheduling | Python, SciPy HiGHS, Streamlit", "meta"),
        p("- Developed five 24-hour forecasting methods on 35,040 electricity observations. Gradient boosting "
          "achieved MAE 10.870 and RMSE 19.408 kWh per interval on the original October-December holdout.", "bullet"),
        p("- Implemented forecast uncertainty diagnostics, historical residual scenarios, and deterministic "
          "and robust linear-programming schedules with feasibility checks and frozen-decision backtests.", "bullet"),
        p("- Documented calibration transfer limits and hypothetical tariffs and workloads; modeled "
          "cost comparisons do not establish realized industrial savings.", "bullet"),
        p(link("Source code & methodology", "https://github.com/Priynka-Roy/enertwin-industrial-energy-digital-twin")
          + " &nbsp; | &nbsp; " + link("Live application", "https://enertwin-industrial-energy-digital-twin-a2rgv4nwanli6udcl9egvr.streamlit.app/"), "meta"),
        p("TECHNICAL SKILLS", "section"),
        p("<b>Programming &amp; data:</b> Python, R, pandas, NumPy, SPSS<br/>"
          "<b>Statistics &amp; ML:</b> statistical inference, regression, time-series analysis, "
          "forecast evaluation, scikit-learn, anomaly detection, explainability<br/>"
          "<b>Optimization:</b> linear programming, SciPy optimization, scenario analysis, robust scheduling<br/>"
          "<b>Tools &amp; visualization:</b> Power BI, Microsoft Excel, Plotly, Streamlit, Git, GitHub"),
        PageBreak(),
        p("Priynka Roy", "title"),
        p("Education, research &amp; recognition", "headline"),
        p("EDUCATION", "section"),
        p("Master of Science in Mathematics and Statistics", "title"),
        p("University of Turku | Turku, Finland | August 2025 - Present", "meta"),
        p("Specialization: Statistics. Current academic interests include statistical modeling, "
          "time-series analysis, and statistical computing."),
        Spacer(1, 5),
        p("Bachelor of Science in Statistics", "title"),
        p("Faculty of Science, Mawlana Bhashani Science and Technology University<br/>"
          "Tangail, Bangladesh | January 2016 - December 2020", "meta"),
        p("RESEARCH &amp; PUBLICATION", "section"),
        p("Peer-reviewed publication", "title"),
        p("Roy, P., Chowdhury, M. H., &amp; Ahmed, A. (2024). Exploring determinants of basic childhood "
          "vaccination coverage in Bangladesh: A generalized Poisson regression analysis. "
          "<i>Discover Public Health, 21</i>, 179."),
        p(link("DOI: 10.1186/s12982-024-00311-w", "https://doi.org/10.1186/s12982-024-00311-w"), "meta"),
        Spacer(1, 6),
        p("Undergraduate research", "title"),
        p("Factors Associated with Stunting Among Under Five Years Children in Rangpur Division, "
          "Bangladesh. Department of Statistics, MBSTU."),
        p("Current master's research interests", "title"),
        p("Ongoing research involving statistical disclosure control and longitudinal data."),
        p("SCHOLARSHIPS", "section"),
        p("<b>Research Scholarship</b><br/>Mawlana Bhashani Science and Technology University, "
          "Tangail, Bangladesh."),
        p("<b>Merit Scholarship</b><br/>Faculty of Exact Science, Turku University, Turku, Finland."),
        p("PROFESSIONAL DEVELOPMENT", "section"),
        p("<b>Data Analyst in Power BI career track</b> | DataCamp<br/>"
          "July 2026 - Present. In progress."),
        p("<b>Workshop / conference participation</b><br/>"
          "The 1st National Conference on Application of Statistics on Sustainable Development Goals, "
          "MBSTU, Bangladesh."),
        p("LANGUAGES", "section"),
        p("Bengali: native | English: IELTS 6.5 | Finnish (Suomi): A1"),
    ]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUTPUT)


if __name__ == "__main__":
    main()
