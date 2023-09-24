import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (lim) => `posts?_limit=${lim}`,
        }),
        getGoodsItem: build.query({
            query: (id) => `posts/${id}`,
        }),
    })
})

export const {useGetGoodsQuery, useGetGoodsItemQuery} = goodsApi;