import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const ludoQuery = createApi({
  reducerPath: 'ludoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3256' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `ludo`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = ludoQuery