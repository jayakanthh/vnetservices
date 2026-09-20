import sys
from docx import Document
from docx.shared import Pt, Inches, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

def set_cell_border(cell, **kwargs):
    """
    Set cell`s border
    Usage:
    set_cell_border(
        cell,
        top={"sz": 12, "val": "single", "color": "#FF0000", "space": "0"},
        bottom={"sz": 12, "color": "#00FF00", "val": "single"},
        start={"sz": 24, "val": "dashed", "shadow": "true"},
        end={"sz": 12, "val": "dashed"},
    )
    """
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()

    # check for tag existnace, if none found, then create one
    tcBorders = tcPr.first_child_found_in("w:tcBorders")
    if tcBorders is None:
        tcBorders = OxmlElement('w:tcBorders')
        tcPr.append(tcBorders)

    # list over all available tags
    for edge in ('start', 'top', 'end', 'bottom', 'insideH', 'insideV'):
        edge_data = kwargs.get(edge)
        if edge_data:
            tag = 'w:{}'.format(edge)
            # check for tag existnace, if none found, then create one
            element = tcBorders.find(qn(tag))
            if element is None:
                element = OxmlElement(tag)
                tcBorders.append(element)
            # looks like order of attributes is important
            for key in ["sz", "val", "color", "space", "shadow"]:
                if key in edge_data:
                    element.set(qn('w:{}'.format(key)), str(edge_data[key]))

def create_template():
    doc = Document()
    
    # Set paper size to A4
    section = doc.sections[0]
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    
    # Set professional margins
    section.top_margin = Cm(2.0) # slightly less because of header
    section.bottom_margin = Cm(2.0)
    section.left_margin = Cm(2.5)
    section.right_margin = Cm(2.5)
    section.header_distance = Cm(1.2)
    section.footer_distance = Cm(1.2)

    # Brand Colors
    brand_color = RGBColor(33, 27, 95) # #211B5F
    text_color = RGBColor(26, 26, 26)  # #1A1A1A
    muted_color = RGBColor(85, 85, 85) # #555555

    # Define base styles
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Arial' # Using standard Arial for maximum compatibility in Word
    font.size = Pt(10.5)
    font.color.rgb = text_color
    style.paragraph_format.space_after = Pt(12)
    style.paragraph_format.line_spacing = 1.3

    # Create Header
    header = section.header
    header_table = header.add_table(rows=1, cols=2, width=Cm(16))
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    
    # Header Left - Logo
    cell_left = header_table.cell(0, 0)
    cell_left.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
    p_logo = cell_left.paragraphs[0]
    try:
        run_logo = p_logo.add_run()
        run_logo.add_picture('../public/logo-with-text.png', width=Inches(1.8))
    except Exception as e:
        p_logo.add_run("[VNET SERVICES LOGO]").bold = True

    # Header Right - Contact Info
    cell_right = header_table.cell(0, 1)
    cell_right.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
    p_contact = cell_right.paragraphs[0]
    p_contact.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_contact.paragraph_format.space_after = Pt(0)
    
    # Add contact info
    run1 = p_contact.add_run("VNET SERVICES\n")
    run1.font.bold = True
    run1.font.size = Pt(9)
    run1.font.color.rgb = brand_color
    
    run2 = p_contact.add_run("123 Innovation Drive, Tech District\nSan Francisco, CA 94105\n+1 (555) 123-4567\ncontact@vnetservices.com\nwww.vnetservices.com")
    run2.font.size = Pt(8.5)
    run2.font.color.rgb = muted_color

    # Add divider line in header
    p_divider = header.add_paragraph()
    p_divider.paragraph_format.space_before = Pt(8)
    p_divider.paragraph_format.space_after = Pt(0)
    border_run = p_divider.add_run()
    
    # Add bottom border to header table to act as a divider
    set_cell_border(
        cell_left,
        bottom={"sz": 4, "val": "single", "color": "211B5F"}
    )
    set_cell_border(
        cell_right,
        bottom={"sz": 4, "val": "single", "color": "211B5F"}
    )

    # Document Metadata area (To, Date, Ref)
    meta_table = doc.add_table(rows=1, cols=2)
    meta_table.autofit = False
    meta_table.columns[0].width = Cm(10)
    meta_table.columns[1].width = Cm(6)

    cell_to = meta_table.cell(0, 0)
    p_to = cell_to.paragraphs[0]
    p_to.paragraph_format.line_spacing = 1.3
    p_to.paragraph_format.space_after = Pt(0)
    
    run_to_bold = p_to.add_run("To:\n")
    run_to_bold.font.bold = True
    run_to_bold.font.size = Pt(10)
    
    run_to_text = p_to.add_run("[Recipient Name]\n[Designation]\n[Company / Organization]")
    run_to_text.font.size = Pt(10)

    cell_date = meta_table.cell(0, 1)
    p_date = cell_date.paragraphs[0]
    p_date.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_date.paragraph_format.line_spacing = 1.3
    p_date.paragraph_format.space_after = Pt(0)
    
    run_date = p_date.add_run("Date: ____________________\nRef No.: ____________________")
    run_date.font.size = Pt(10)
    run_date.font.color.rgb = muted_color

    # Spacer
    p_spacer = doc.add_paragraph()
    p_spacer.paragraph_format.space_after = Pt(12)

    # Subject
    p_subj = doc.add_paragraph()
    p_subj.paragraph_format.space_after = Pt(24)
    # Add bottom border to subject
    p_subj_format = p_subj.paragraph_format
    
    run_subj = p_subj.add_run("Subject: ")
    run_subj.font.bold = True
    run_subj.font.size = Pt(10.5)
    
    run_subj_text = p_subj.add_run("____________________________________________________")
    run_subj_text.font.bold = False

    # Body
    p_salutation = doc.add_paragraph("Dear [Recipient Name],")
    
    p_body = doc.add_paragraph("[Letter content goes here. This area supports several paragraphs of normal business correspondence. The layout is optimized for Microsoft Word and exports flawlessly to PDF. Simply highlight this text and begin typing to draft your official correspondence.]")
    p_body.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

    p_body2 = doc.add_paragraph("At VNet Services, we pride ourselves on building technology around your business. We deliver custom software development, IT consulting, and strategic digital engineering to established organizations. We abstract away technical complexity, allowing you to focus completely on growth and innovation.")
    p_body2.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    
    p_body3 = doc.add_paragraph("Thank you for your time and continued partnership.")

    # Signature
    p_sig_regards = doc.add_paragraph()
    p_sig_regards.paragraph_format.space_before = Pt(36)
    p_sig_regards.paragraph_format.space_after = Pt(48) # Space for physical signature
    p_sig_regards.add_run("Regards,")

    p_sig_name = doc.add_paragraph()
    p_sig_name.paragraph_format.space_after = Pt(0)
    run_name = p_sig_name.add_run("[Full Name]")
    run_name.font.bold = True
    run_name.font.size = Pt(10.5)

    p_sig_title = doc.add_paragraph()
    p_sig_title.paragraph_format.space_after = Pt(2)
    run_title = p_sig_title.add_run("[Designation]")
    run_title.font.size = Pt(10)
    run_title.font.color.rgb = muted_color

    p_sig_comp = doc.add_paragraph()
    run_comp = p_sig_comp.add_run("VNET SERVICES")
    run_comp.font.bold = True
    run_comp.font.size = Pt(9)
    run_comp.font.color.rgb = brand_color

    # Footer
    footer = section.footer
    footer_table = footer.add_table(rows=1, cols=1, width=Cm(16))
    footer_cell = footer_table.cell(0, 0)
    
    # Add top border to footer cell
    set_cell_border(
        footer_cell,
        top={"sz": 4, "val": "single", "color": "211B5F"}
    )
    
    p_footer = footer_cell.paragraphs[0]
    p_footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_footer.paragraph_format.space_before = Pt(8)
    p_footer.paragraph_format.line_spacing = 1.3
    
    run_f1 = p_footer.add_run("[Company Address] | [City, State, ZIP]\n")
    run_f1.font.size = Pt(8)
    run_f1.font.color.rgb = muted_color

    run_f2 = p_footer.add_run("Phone: [phone number] | Email: [company email] | ")
    run_f2.font.size = Pt(8)
    run_f2.font.color.rgb = muted_color
    
    run_f3 = p_footer.add_run("www.vnetservices.com\n")
    run_f3.font.size = Pt(8)
    run_f3.font.bold = True
    run_f3.font.color.rgb = brand_color
    
    run_f4 = p_footer.add_run("GSTIN: [Placeholder] | CIN: [Placeholder]")
    run_f4.font.size = Pt(8)
    run_f4.font.color.rgb = muted_color

    doc.save("VNet_Services_Letterhead.docx")

if __name__ == "__main__":
    create_template()
