import { SITE_NAME, SITE_TITLE, LINKEDIN_URL, RESUME_PATH, FORMSPREE_ENDPOINT, NAV_LINKS, interests } from './constants'

describe('constants', () => {
  it('has correct site metadata', () => {
    expect(SITE_NAME).toBe('Mo Adlouni')
    expect(SITE_TITLE).toContain('Mo Adlouni')
    expect(RESUME_PATH).toBe('/Mo_Adlouni_Resume_2025.pdf')
  })

  it('has a valid LinkedIn URL', () => {
    expect(LINKEDIN_URL).toMatch(/^https:\/\/www\.linkedin\.com\/in\//)
  })

  it('has a valid Formspree endpoint', () => {
    expect(FORMSPREE_ENDPOINT).toMatch(/^https:\/\/formspree\.io\/f\//)
  })

  describe('NAV_LINKS', () => {
    it('has 4 navigation links', () => {
      expect(NAV_LINKS).toHaveLength(4)
    })

    it('includes a home link at /', () => {
      expect(NAV_LINKS.find((l) => l.href === '/')).toBeDefined()
    })

    it('every link has a non-empty href and label', () => {
      NAV_LINKS.forEach((link) => {
        expect(link.href).toBeTruthy()
        expect(link.label).toBeTruthy()
      })
    })
  })

  describe('interests', () => {
    it('has at least 3 interest cards', () => {
      expect(interests.length).toBeGreaterThanOrEqual(3)
    })

    it('every interest has required fields', () => {
      interests.forEach((item) => {
        expect(item.id).toBeTruthy()
        expect(item.image).toMatch(/^\/images\//)
        expect(item.title).toBeTruthy()
        expect(item.caption).toBeTruthy()
      })
    })

    it('every interest has a unique id', () => {
      const ids = interests.map((i) => i.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })
})
