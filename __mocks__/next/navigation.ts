export const usePathname = jest.fn(() => '/')
export const useRouter = jest.fn(() => ({ push: jest.fn(), replace: jest.fn() }))
