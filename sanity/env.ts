export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'skfQuFfwah4GP3ISXGYXU4x7ZLV61JZ87FuD12kzmK1fqCcLqA6Sfv5lkQuvdvomS3h8ncSKeaay5IAEms2LzXcc3HTXMQIHUB9ePHN0VrW8SBVHekv6btDQWniyOwazaamRRB2Ok8qwQRykuIX2UR5XBjCZTbFbzpUMoVOwXtzJEVhVRzn3',
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
