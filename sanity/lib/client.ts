import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn ,token} from '../env'

export const readclient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeclient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
})

