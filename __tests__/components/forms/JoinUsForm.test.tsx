import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { render } from '../../utils/test-utils'
import JoinUsForm from '@/components/forms/JoinUsForm'

// Mock fetch globally for Netlify Forms submission
global.fetch = jest.fn()

describe('JoinUsForm Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()

    // Default mock for fetch (Netlify Forms)
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Initial Render', () => {
    it('renders join us form with all key sections', () => {
      render(<JoinUsForm />)

      expect(screen.getByRole('heading', { name: /join our community/i })).toBeInTheDocument()
      expect(screen.getByText(/take the first step/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /join our community/i })).toBeInTheDocument()
    })

    it('displays disclaimer notice', () => {
      render(<JoinUsForm />)

      expect(screen.getByText(/important notice/i)).toBeInTheDocument()
      expect(screen.getByText(/988.*suicide.*crisis lifeline/i)).toBeInTheDocument()
      expect(screen.getByText(/not a substitute for professional mental health care/i)).toBeInTheDocument()
    })

    it('displays contact information at bottom', () => {
      render(<JoinUsForm />)

      expect(screen.getByText(/questions\?/i)).toBeInTheDocument()
      expect(screen.getByText(/william@asafespaceformen\.org/i)).toBeInTheDocument()
    })

    it('renders all form sections', () => {
      render(<JoinUsForm />)

      // Personal information
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
      
      // Contact information
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
      
      // Location
      expect(screen.getByLabelText(/city/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/state/i)).toBeInTheDocument()
      
      // Interests and availability
      expect(screen.getByText(/what interests you most/i)).toBeInTheDocument()
      expect(screen.getByText(/when are you typically available/i)).toBeInTheDocument()
    })

    it('has Michigan as default state', () => {
      render(<JoinUsForm />)

      const stateSelect = screen.getByLabelText(/state/i) as HTMLSelectElement
      expect(stateSelect.value).toBe('Michigan')
    })

    it('has email as default contact method', () => {
      render(<JoinUsForm />)

      const emailOption = screen.getByRole('radio', { name: /email/i }) as HTMLInputElement
      expect(emailOption.checked).toBe(true)
    })

    it('displays required field indicators', () => {
      render(<JoinUsForm />)

      // Check for asterisks on required fields
      expect(screen.getByText(/first name.*\*/i)).toBeInTheDocument()
      expect(screen.getByText(/last name.*\*/i)).toBeInTheDocument()
      expect(screen.getByText(/email address.*\*/i)).toBeInTheDocument()
    })
  })

  describe('Text Input Fields', () => {
    it('accepts first name input', async () => {
      const { user } = render(<JoinUsForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      await user.type(firstNameInput, 'John')

      expect(firstNameInput).toHaveValue('John')
    })

    it('accepts last name input', async () => {
      const { user } = render(<JoinUsForm />)

      const lastNameInput = screen.getByLabelText(/last name/i)
      await user.type(lastNameInput, 'Smith')

      expect(lastNameInput).toHaveValue('Smith')
    })

    it('accepts email input', async () => {
      const { user } = render(<JoinUsForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      await user.type(emailInput, 'john.smith@example.com')

      expect(emailInput).toHaveValue('john.smith@example.com')
    })

    it('accepts phone number input', async () => {
      const { user } = render(<JoinUsForm />)

      const phoneInput = screen.getByLabelText(/phone number/i)
      await user.type(phoneInput, '(555) 123-4567')

      expect(phoneInput).toHaveValue('(555) 123-4567')
    })

    it('accepts city input', async () => {
      const { user } = render(<JoinUsForm />)

      const cityInput = screen.getByLabelText(/city/i)
      await user.type(cityInput, 'Detroit')

      expect(cityInput).toHaveValue('Detroit')
    })
  })

  describe('Select Dropdowns', () => {
    it('changes state selection', async () => {
      const { user } = render(<JoinUsForm />)

      const stateSelect = screen.getByLabelText(/state/i)
      await user.selectOptions(stateSelect, 'Ohio')

      expect(stateSelect).toHaveValue('Ohio')
    })

    it('displays all state options', () => {
      render(<JoinUsForm />)

      const stateSelect = screen.getByLabelText(/state/i)
      const options = Array.from(stateSelect.querySelectorAll('option')).map(opt => opt.value)

      expect(options).toContain('Michigan')
      expect(options).toContain('Ohio')
      expect(options).toContain('Illinois')
      expect(options).toContain('Indiana')
      expect(options).toContain('Other')
    })

    it('changes "how did you hear about us" selection', async () => {
      const { user } = render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      await user.selectOptions(hearAboutUsSelect, 'Social Media (Facebook, Instagram, Twitter)')

      expect(hearAboutUsSelect).toHaveValue('Social Media (Facebook, Instagram, Twitter)')
    })

    it('displays referral source options', () => {
      render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      
      expect(screen.getByRole('option', { name: /search engine/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /social media/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /friend or family/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /healthcare provider/i })).toBeInTheDocument()
    })
  })

  describe('Radio Button Groups - Preferred Contact', () => {
    it('displays all contact method options', () => {
      render(<JoinUsForm />)

      expect(screen.getByRole('radio', { name: /email/i })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: /phone call/i })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: /text message/i })).toBeInTheDocument()
    })

    it('selects phone as contact method', async () => {
      const { user } = render(<JoinUsForm />)

      const phoneRadio = screen.getByRole('radio', { name: /phone call/i })
      await user.click(phoneRadio)

      expect(phoneRadio).toBeChecked()
      
      const emailRadio = screen.getByRole('radio', { name: /email/i })
      expect(emailRadio).not.toBeChecked()
    })

    it('selects text message as contact method', async () => {
      const { user } = render(<JoinUsForm />)

      const textRadio = screen.getByRole('radio', { name: /text message/i })
      await user.click(textRadio)

      expect(textRadio).toBeChecked()
    })

    it('only allows one contact method to be selected', async () => {
      const { user } = render(<JoinUsForm />)

      const emailRadio = screen.getByRole('radio', { name: /email/i })
      const phoneRadio = screen.getByRole('radio', { name: /phone call/i })
      
      expect(emailRadio).toBeChecked()
      
      await user.click(phoneRadio)
      expect(phoneRadio).toBeChecked()
      expect(emailRadio).not.toBeChecked()
      
      await user.click(emailRadio)
      expect(emailRadio).toBeChecked()
      expect(phoneRadio).not.toBeChecked()
    })
  })

  describe('Checkbox Arrays - Interests', () => {
    it('displays all interest options', () => {
      const { container } = render(<JoinUsForm />)

      // Look for the interests section specifically
      const interestsSection = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      
      expect(interestsSection?.textContent).toContain('Support Groups')
      expect(interestsSection?.textContent).toContain('Educational Workshops')
      expect(interestsSection?.textContent).toContain('Volunteering')
      expect(interestsSection?.textContent).toContain('Community Events')
      expect(interestsSection?.textContent).toContain('Mental Health Advocacy')
      expect(interestsSection?.textContent).toContain('Peer Mentoring')
    })

    it('allows selecting single interest', async () => {
      const { user, container } = render(<JoinUsForm />)

      // Find the interests grid section (first 3-column grid)
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const interestsGrid = grids[0] // First 3-column grid is interests
      
      // Find "Support Groups" label within interests grid
      const labels = Array.from(interestsGrid.querySelectorAll('label'))
      const supportGroupsLabel = labels.find(label => label.textContent?.includes('Support Groups'))!
      
      await user.click(supportGroupsLabel)

      const checkbox = supportGroupsLabel.querySelector('input[type="checkbox"]') as HTMLInputElement
      expect(checkbox.checked).toBe(true)
    })

    it('allows selecting multiple interests', async () => {
      const { user, container } = render(<JoinUsForm />)

      // Find the interests grid section
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const interestsGrid = grids[0]
      
      const labels = Array.from(interestsGrid.querySelectorAll('label'))
      const supportGroups = labels.find(label => label.textContent?.includes('Support Groups'))!
      const workshops = labels.find(label => label.textContent?.includes('Educational Workshops'))!
      const volunteering = labels.find(label => label.textContent?.includes('Volunteering'))!

      await user.click(supportGroups)
      await user.click(workshops)
      await user.click(volunteering)

      const supportGroupsCheckbox = supportGroups.querySelector('input[type="checkbox"]') as HTMLInputElement
      const workshopsCheckbox = workshops.querySelector('input[type="checkbox"]') as HTMLInputElement
      const volunteeringCheckbox = volunteering.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(supportGroupsCheckbox.checked).toBe(true)
      expect(workshopsCheckbox.checked).toBe(true)
      expect(volunteeringCheckbox.checked).toBe(true)
    })

    it('allows deselecting interests', async () => {
      const { user, container } = render(<JoinUsForm />)

      // Find the interests grid section
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const interestsGrid = grids[0]
      
      const labels = Array.from(interestsGrid.querySelectorAll('label'))
      const supportGroups = labels.find(label => label.textContent?.includes('Support Groups'))!
      
      await user.click(supportGroups)
      const checkbox = supportGroups.querySelector('input[type="checkbox"]') as HTMLInputElement
      expect(checkbox.checked).toBe(true)

      await user.click(supportGroups)
      expect(checkbox.checked).toBe(false)
    })
  })

  describe('Checkbox Arrays - Availability', () => {
    it('displays all availability options', () => {
      const { container } = render(<JoinUsForm />)

      // Look for the availability section (second 3-column grid)
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const availabilityGrid = grids[1] // Second 3-column grid is availability

      expect(availabilityGrid.textContent).toContain('Weekday Mornings')
      expect(availabilityGrid.textContent).toContain('Weekday Afternoons')
      expect(availabilityGrid.textContent).toContain('Weekday Evenings')
      expect(availabilityGrid.textContent).toContain('Weekend Mornings')
      expect(availabilityGrid.textContent).toContain('Weekend Afternoons')
      expect(availabilityGrid.textContent).toContain('Weekend Evenings')
      expect(availabilityGrid.textContent).toContain('Flexible Schedule')
    })

    it('allows selecting multiple availability slots', async () => {
      const { user, container } = render(<JoinUsForm />)

      // Find the availability grid (second 3-column grid)
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const availabilityGrid = grids[1]
      
      const labels = Array.from(availabilityGrid.querySelectorAll('label'))
      const weekdayMornings = labels.find(label => label.textContent?.includes('Weekday Mornings'))!
      const weekendEvenings = labels.find(label => label.textContent?.includes('Weekend Evenings'))!

      await user.click(weekdayMornings)
      await user.click(weekendEvenings)

      const morningCheckbox = weekdayMornings.querySelector('input[type="checkbox"]') as HTMLInputElement
      const eveningCheckbox = weekendEvenings.querySelector('input[type="checkbox"]') as HTMLInputElement

      expect(morningCheckbox.checked).toBe(true)
      expect(eveningCheckbox.checked).toBe(true)
    })

    it('allows deselecting availability slots', async () => {
      const { user, container } = render(<JoinUsForm />)

      // Find the availability grid
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const availabilityGrid = grids[1]
      
      const labels = Array.from(availabilityGrid.querySelectorAll('label'))
      const flexible = labels.find(label => label.textContent?.includes('Flexible Schedule'))!
      
      await user.click(flexible)
      const checkbox = flexible.querySelector('input[type="checkbox"]') as HTMLInputElement
      expect(checkbox.checked).toBe(true)

      await user.click(flexible)
      expect(checkbox.checked).toBe(false)
    })
  })

  describe('Volunteer Checkbox', () => {
    it('displays volunteer section', () => {
      render(<JoinUsForm />)

      expect(screen.getByText(/interested in volunteering for events/i)).toBeInTheDocument()
      expect(screen.getByText(/help us organize and support community events/i)).toBeInTheDocument()
    })

    it('allows checking volunteer interest', async () => {
      const { user } = render(<JoinUsForm />)

      const volunteerCheckbox = screen.getByRole('checkbox', { name: /interested in volunteering/i })
      await user.click(volunteerCheckbox)

      expect(volunteerCheckbox).toBeChecked()
    })

    it('allows unchecking volunteer interest', async () => {
      const { user } = render(<JoinUsForm />)

      const volunteerCheckbox = screen.getByRole('checkbox', { name: /interested in volunteering/i })
      
      await user.click(volunteerCheckbox)
      expect(volunteerCheckbox).toBeChecked()

      await user.click(volunteerCheckbox)
      expect(volunteerCheckbox).not.toBeChecked()
    })
  })

  describe('Textarea Fields', () => {
    it('accepts experience textarea input', async () => {
      const { user } = render(<JoinUsForm />)

      const experienceTextarea = screen.getByLabelText(/do you have any experience with mental health advocacy/i)
      await user.type(experienceTextarea, 'I have 5 years of experience in mental health advocacy')

      expect(experienceTextarea).toHaveValue('I have 5 years of experience in mental health advocacy')
    })

    it('accepts motivation textarea input', async () => {
      const { user } = render(<JoinUsForm />)

      const motivationTextarea = screen.getByLabelText(/what motivates you to join our community/i)
      await user.type(motivationTextarea, 'I want to support other men in their mental health journey')

      expect(motivationTextarea).toHaveValue('I want to support other men in their mental health journey')
    })

    it('allows multi-line text in textareas', async () => {
      const { user } = render(<JoinUsForm />)

      const experienceTextarea = screen.getByLabelText(/do you have any experience/i)
      await user.type(experienceTextarea, 'Line 1{Enter}Line 2{Enter}Line 3')

      expect(experienceTextarea).toHaveValue('Line 1\nLine 2\nLine 3')
    })
  })

  describe('Conditional Logic - "Other" Field', () => {
    it('does not show "Other" text field by default', () => {
      render(<JoinUsForm />)

      const otherField = screen.queryByLabelText(/please specify/i)
      expect(otherField).not.toBeInTheDocument()
    })

    it('shows "Other" text field when "Other" is selected in referral source', async () => {
      const { user } = render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      await user.selectOptions(hearAboutUsSelect, 'Other (please specify below)')

      await waitFor(() => {
        expect(screen.getByLabelText(/please specify/i)).toBeInTheDocument()
      })
    })

    it('accepts input in "Other" text field', async () => {
      const { user } = render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      await user.selectOptions(hearAboutUsSelect, 'Other (please specify below)')

      await waitFor(() => {
        expect(screen.getByLabelText(/please specify/i)).toBeInTheDocument()
      })

      const otherField = screen.getByLabelText(/please specify/i)
      await user.type(otherField, 'Podcast recommendation')

      expect(otherField).toHaveValue('Podcast recommendation')
    })

    it('hides "Other" field when selection changes away from "Other"', async () => {
      const { user } = render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      
      // Select "Other"
      await user.selectOptions(hearAboutUsSelect, 'Other (please specify below)')
      await waitFor(() => {
        expect(screen.getByLabelText(/please specify/i)).toBeInTheDocument()
      })

      // Change to different option
      await user.selectOptions(hearAboutUsSelect, 'Social Media (Facebook, Instagram, Twitter)')

      await waitFor(() => {
        expect(screen.queryByLabelText(/please specify/i)).not.toBeInTheDocument()
      })
    })

    it('clears "Other" field value when hidden', async () => {
      const { user } = render(<JoinUsForm />)

      const hearAboutUsSelect = screen.getByLabelText(/how did you hear about us/i)
      
      // Select "Other" and enter text
      await user.selectOptions(hearAboutUsSelect, 'Other (please specify below)')
      const otherField = await screen.findByLabelText(/please specify/i)
      await user.type(otherField, 'Some text')

      // Change away from "Other"
      await user.selectOptions(hearAboutUsSelect, 'Friend or Family Member')

      // Select "Other" again - field should be empty
      await user.selectOptions(hearAboutUsSelect, 'Other (please specify below)')
      const otherFieldAgain = await screen.findByLabelText(/please specify/i)
      
      expect(otherFieldAgain).toHaveValue('')
    })
  })

  describe('Required Checkboxes - Agreements', () => {
    it('displays both required agreement checkboxes', () => {
      render(<JoinUsForm />)

      expect(screen.getByText(/i agree to be contacted by a safe space for men/i)).toBeInTheDocument()
      expect(screen.getByText(/i understand that a safe space for men provides peer support/i)).toBeInTheDocument()
    })

    it('allows checking contact agreement', async () => {
      const { user } = render(<JoinUsForm />)

      const contactCheckbox = screen.getByRole('checkbox', { name: /i agree to be contacted/i })
      await user.click(contactCheckbox)

      expect(contactCheckbox).toBeChecked()
    })

    it('allows checking terms agreement', async () => {
      const { user } = render(<JoinUsForm />)

      const termsCheckbox = screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i })
      await user.click(termsCheckbox)

      expect(termsCheckbox).toBeChecked()
    })

    it('both agreements start unchecked', () => {
      render(<JoinUsForm />)

      const contactCheckbox = screen.getByRole('checkbox', { name: /i agree to be contacted/i })
      const termsCheckbox = screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i })

      expect(contactCheckbox).not.toBeChecked()
      expect(termsCheckbox).not.toBeChecked()
    })
  })

  describe('Form Validation - Required Fields', () => {
    it('marks firstName as required', () => {
      render(<JoinUsForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      expect(firstNameInput).toBeRequired()
    })

    it('marks lastName as required', () => {
      render(<JoinUsForm />)

      const lastNameInput = screen.getByLabelText(/last name/i)
      expect(lastNameInput).toBeRequired()
    })

    it('marks email as required', () => {
      render(<JoinUsForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      expect(emailInput).toBeRequired()
    })

    it('marks contact agreement as required', () => {
      render(<JoinUsForm />)

      const contactCheckbox = screen.getByRole('checkbox', { name: /i agree to be contacted/i })
      expect(contactCheckbox).toBeRequired()
    })

    it('marks terms agreement as required', () => {
      render(<JoinUsForm />)

      const termsCheckbox = screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i })
      expect(termsCheckbox).toBeRequired()
    })

    it('does not mark phone as required', () => {
      render(<JoinUsForm />)

      const phoneInput = screen.getByLabelText(/phone number/i)
      expect(phoneInput).not.toBeRequired()
    })

    it('does not mark optional textareas as required', () => {
      render(<JoinUsForm />)

      const experienceTextarea = screen.getByLabelText(/do you have any experience/i)
      const motivationTextarea = screen.getByLabelText(/what motivates you/i)

      expect(experienceTextarea).not.toBeRequired()
      expect(motivationTextarea).not.toBeRequired()
    })
  })

  describe('Accessibility', () => {
    it('has proper form structure with data-netlify', () => {
      const { container } = render(<JoinUsForm />)

      const form = container.querySelector('form[data-netlify="true"]')
      expect(form).toBeInTheDocument()
    })

    it('includes hidden honeypot field for spam protection', () => {
      const { container } = render(<JoinUsForm />)

      const honeypot = container.querySelector('input[name="bot-field"]')
      expect(honeypot).toBeInTheDocument()
      expect(honeypot).toHaveAttribute('type', 'hidden')
    })

    it('includes hidden form-name field for Netlify', () => {
      const { container } = render(<JoinUsForm />)

      const formName = container.querySelector('input[name="form-name"][value="join-us"]')
      expect(formName).toBeInTheDocument()
      expect(formName).toHaveAttribute('type', 'hidden')
    })

    it('provides placeholder text for text inputs', () => {
      render(<JoinUsForm />)

      expect(screen.getByPlaceholderText(/enter your first name/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/enter your last name/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(/your\.email@example\.com/i)).toBeInTheDocument()
    })

    it('associates labels with form inputs', () => {
      render(<JoinUsForm />)

      const firstNameLabel = screen.getByText(/first name/i)
      const firstNameInput = screen.getByLabelText(/first name/i)

      expect(firstNameLabel).toBeInTheDocument()
      expect(firstNameInput).toBeInTheDocument()
    })

    it('uses semantic HTML for disclaimer notice', () => {
      const { container } = render(<JoinUsForm />)

      const disclaimer = container.querySelector('.bg-blue-50')
      expect(disclaimer).toBeInTheDocument()
      expect(disclaimer?.textContent).toContain('Important Notice')
    })
  })

  describe('Form Submission - Happy Path', () => {
    const fillRequiredFields = async (user: any) => {
      // Fill required fields
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john.smith@example.com')
      
      // Check required agreements
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))
    }

    it('submits form with required fields only', async () => {
      const { user } = render(<JoinUsForm />)

      await fillRequiredFields(user)

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          '/_forms.html',
          expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          })
        )
      })
    })

    it('includes all form data in submission', async () => {
      const { user } = render(<JoinUsForm />)

      // Fill required fields
      await fillRequiredFields(user)
      
      // Fill optional fields
      await user.type(screen.getByLabelText(/phone number/i), '555-123-4567')
      await user.type(screen.getByLabelText(/city/i), 'Detroit')
      await user.selectOptions(screen.getByLabelText(/how did you hear about us/i), 'Social Media (Facebook, Instagram, Twitter)')

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled()
        const callArgs = (global.fetch as jest.Mock).mock.calls[0]
        const bodyString = callArgs[1].body

        expect(bodyString).toContain('firstName=John')
        expect(bodyString).toContain('lastName=Smith')
        expect(bodyString).toContain('email=john.smith%40example.com')
        expect(bodyString).toContain('phone=555-123-4567')
        expect(bodyString).toContain('city=Detroit')
      })
    })

    it('includes interests array in submission', async () => {
      const { user, container } = render(<JoinUsForm />)

      await fillRequiredFields(user)

      // Select multiple interests
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const interestsGrid = grids[0]
      const labels = Array.from(interestsGrid.querySelectorAll('label'))
      const supportGroups = labels.find(label => label.textContent?.includes('Support Groups'))!
      const workshops = labels.find(label => label.textContent?.includes('Educational Workshops'))!

      await user.click(supportGroups)
      await user.click(workshops)

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        const callArgs = (global.fetch as jest.Mock).mock.calls[0]
        const bodyString = callArgs[1].body

        expect(bodyString).toContain('interests=')
      })
    })

    it('includes availability array in submission', async () => {
      const { user, container } = render(<JoinUsForm />)

      await fillRequiredFields(user)

      // Select availability
      const grids = container.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3')
      const availabilityGrid = grids[1]
      const labels = Array.from(availabilityGrid.querySelectorAll('label'))
      const weekdayMornings = labels.find(label => label.textContent?.includes('Weekday Mornings'))!

      await user.click(weekdayMornings)

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        const callArgs = (global.fetch as jest.Mock).mock.calls[0]
        const bodyString = callArgs[1].body

        expect(bodyString).toContain('availability=')
      })
    })

    it('includes volunteer status in submission', async () => {
      const { user } = render(<JoinUsForm />)

      await fillRequiredFields(user)

      const volunteerCheckbox = screen.getByRole('checkbox', { name: /interested in volunteering/i })
      await user.click(volunteerCheckbox)

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        const callArgs = (global.fetch as jest.Mock).mock.calls[0]
        const bodyString = callArgs[1].body

        expect(bodyString).toContain('interestedInVolunteering=Yes')
      })
    })

    it('includes timestamp in submission', async () => {
      const { user } = render(<JoinUsForm />)

      await fillRequiredFields(user)

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        const callArgs = (global.fetch as jest.Mock).mock.calls[0]
        const bodyString = callArgs[1].body

        expect(bodyString).toContain('submissionDate=')
      })
    })
  })

  describe('Form Submission - Loading State', () => {
    it('shows loading state during submission', async () => {
      // Mock slow response
      ;(global.fetch as jest.Mock).mockImplementationOnce(() => 
        new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100))
      )

      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      expect(screen.getByText(/joining community/i)).toBeInTheDocument()
    })

    it('disables submit button during submission', async () => {
      ;(global.fetch as jest.Mock).mockImplementationOnce(() => 
        new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100))
      )

      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      const loadingButton = screen.getByRole('button', { name: /joining community/i })
      expect(loadingButton).toBeDisabled()
    })
  })

  describe('Form Submission - Error Handling', () => {
    it('displays error message when submission fails', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      })

      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/there was an error submitting your form/i)).toBeInTheDocument()
      })
    })

    it('handles network errors gracefully', async () => {
      ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/there was an error submitting your form/i)).toBeInTheDocument()
      })
    })

    it('re-enables form after error', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      })

      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/there was an error submitting your form/i)).toBeInTheDocument()
      })

      // Form should be enabled again
      expect(submitButton).not.toBeDisabled()
    })
  })

  describe('Success State', () => {
    it('displays success message after submission', async () => {
      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/welcome to our community/i)).toBeInTheDocument()
      })
    })

    it('hides form after successful submission', async () => {
      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument()
      })
    })

    it('displays "what\'s next" information', async () => {
      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/what's next/i)).toBeInTheDocument()
        expect(screen.getByText(/you'll receive a welcome email within 24 hours/i)).toBeInTheDocument()
      })
    })

    it('displays links to resources and home page', async () => {
      const { user } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByRole('link', { name: /explore resources/i })).toHaveAttribute('href', '/resources')
        expect(screen.getByRole('link', { name: /return home/i })).toHaveAttribute('href', '/')
      })
    })

    it('displays success icon', async () => {
      const { user, container } = render(<JoinUsForm />)

      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
      await user.click(screen.getByRole('checkbox', { name: /i agree to be contacted/i }))
      await user.click(screen.getByRole('checkbox', { name: /i understand that a safe space for men provides/i }))

      const submitButton = screen.getByRole('button', { name: /join our community/i })
      await user.click(submitButton)

      await waitFor(() => {
        const successIcon = container.querySelector('.bg-emerald-100')
        expect(successIcon).toBeInTheDocument()
      })
    })
  })
})