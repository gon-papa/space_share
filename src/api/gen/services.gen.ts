// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { GetApodData, GetApodError, GetApodResponse, GetEpicNaturalError, GetEpicNaturalResponse, GetEpicNaturalDateData, GetEpicNaturalDateError, GetEpicNaturalDateResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * 天文学の画像日報
 * 天文学の画像日報（APOD）を取得します。
 */
export const getApod = <ThrowOnError extends boolean = false>(options?: Options<GetApodData, ThrowOnError>) => { return (options?.client ?? client).get<GetApodResponse, GetApodError, ThrowOnError>({
    ...options,
    url: '/planetary/apod'
}); };

/**
 * 自然色画像を取得
 * 最新の自然色画像の日付に関するメタデータを取得します。
 */
export const getEpicNatural = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GetEpicNaturalResponse, GetEpicNaturalError, ThrowOnError>({
    ...options,
    url: '/EPIC/api/natural'
}); };

/**
 * 日付で自然色画像を取得
 * 指定された日付の自然色画像のメタデータを取得します。
 */
export const getEpicNaturalDate = <ThrowOnError extends boolean = false>(options: Options<GetEpicNaturalDateData, ThrowOnError>) => { return (options?.client ?? client).get<GetEpicNaturalDateResponse, GetEpicNaturalDateError, ThrowOnError>({
    ...options,
    url: '/EPIC/natural/date/{date}'
}); };