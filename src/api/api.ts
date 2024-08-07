/* tslint:disable */
/* eslint-disable */
/**
 * Space Share API
 * Space Share API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface APODResponse
 */
export interface APODResponse {
    /**
     * APOD画像の日付
     * @type {string}
     * @memberof APODResponse
     */
    'date'?: string;
    /**
     * APOD画像の説明
     * @type {string}
     * @memberof APODResponse
     */
    'explanation'?: string;
    /**
     * APOD画像のURL
     * @type {string}
     * @memberof APODResponse
     */
    'url'?: string;
    /**
     * 高解像度APOD画像のURL
     * @type {string}
     * @memberof APODResponse
     */
    'hdurl'?: string;
    /**
     * メディアの種類（画像またはビデオ）
     * @type {string}
     * @memberof APODResponse
     */
    'media_type'?: string;
    /**
     * サービスのバージョン
     * @type {string}
     * @memberof APODResponse
     */
    'service_version'?: string;
    /**
     * APOD画像のタイトル
     * @type {string}
     * @memberof APODResponse
     */
    'title'?: string;
    /**
     * APOD画像の著作権情報（利用可能な場合）
     * @type {string}
     * @memberof APODResponse
     */
    'copyright'?: string;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInner
 */
export interface EPICNaturalResponseInner {
    /**
     * 画像の名前
     * @type {string}
     * @memberof EPICNaturalResponseInner
     */
    'image'?: string;
    /**
     * 画像の日付
     * @type {string}
     * @memberof EPICNaturalResponseInner
     */
    'date'?: string;
    /**
     * 画像のキャプション
     * @type {string}
     * @memberof EPICNaturalResponseInner
     */
    'caption'?: string;
    /**
     * 
     * @type {EPICNaturalResponseInnerCentroidCoordinates}
     * @memberof EPICNaturalResponseInner
     */
    'centroid_coordinates'?: EPICNaturalResponseInnerCentroidCoordinates;
    /**
     * 
     * @type {EPICNaturalResponseInnerDscovrJ2000Position}
     * @memberof EPICNaturalResponseInner
     */
    'dscovr_j2000_position'?: EPICNaturalResponseInnerDscovrJ2000Position;
    /**
     * 
     * @type {EPICNaturalResponseInnerLunarJ2000Position}
     * @memberof EPICNaturalResponseInner
     */
    'lunar_j2000_position'?: EPICNaturalResponseInnerLunarJ2000Position;
    /**
     * 
     * @type {EPICNaturalResponseInnerSunJ2000Position}
     * @memberof EPICNaturalResponseInner
     */
    'sun_j2000_position'?: EPICNaturalResponseInnerSunJ2000Position;
    /**
     * 
     * @type {EPICNaturalResponseInnerAttitudeQuaternions}
     * @memberof EPICNaturalResponseInner
     */
    'attitude_quaternions'?: EPICNaturalResponseInnerAttitudeQuaternions;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInnerAttitudeQuaternions
 */
export interface EPICNaturalResponseInnerAttitudeQuaternions {
    /**
     * クォータニオンのQ0成分
     * @type {number}
     * @memberof EPICNaturalResponseInnerAttitudeQuaternions
     */
    'q0'?: number;
    /**
     * クォータニオンのQ1成分
     * @type {number}
     * @memberof EPICNaturalResponseInnerAttitudeQuaternions
     */
    'q1'?: number;
    /**
     * クォータニオンのQ2成分
     * @type {number}
     * @memberof EPICNaturalResponseInnerAttitudeQuaternions
     */
    'q2'?: number;
    /**
     * クォータニオンのQ3成分
     * @type {number}
     * @memberof EPICNaturalResponseInnerAttitudeQuaternions
     */
    'q3'?: number;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInnerCentroidCoordinates
 */
export interface EPICNaturalResponseInnerCentroidCoordinates {
    /**
     * 中心の緯度
     * @type {number}
     * @memberof EPICNaturalResponseInnerCentroidCoordinates
     */
    'lat'?: number;
    /**
     * 中心の経度
     * @type {number}
     * @memberof EPICNaturalResponseInnerCentroidCoordinates
     */
    'lon'?: number;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInnerDscovrJ2000Position
 */
export interface EPICNaturalResponseInnerDscovrJ2000Position {
    /**
     * DSCOVRのJ2000座標のX値
     * @type {number}
     * @memberof EPICNaturalResponseInnerDscovrJ2000Position
     */
    'x'?: number;
    /**
     * DSCOVRのJ2000座標のY値
     * @type {number}
     * @memberof EPICNaturalResponseInnerDscovrJ2000Position
     */
    'y'?: number;
    /**
     * DSCOVRのJ2000座標のZ値
     * @type {number}
     * @memberof EPICNaturalResponseInnerDscovrJ2000Position
     */
    'z'?: number;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInnerLunarJ2000Position
 */
export interface EPICNaturalResponseInnerLunarJ2000Position {
    /**
     * 月のJ2000座標のX値
     * @type {number}
     * @memberof EPICNaturalResponseInnerLunarJ2000Position
     */
    'x'?: number;
    /**
     * 月のJ2000座標のY値
     * @type {number}
     * @memberof EPICNaturalResponseInnerLunarJ2000Position
     */
    'y'?: number;
    /**
     * 月のJ2000座標のZ値
     * @type {number}
     * @memberof EPICNaturalResponseInnerLunarJ2000Position
     */
    'z'?: number;
}
/**
 * 
 * @export
 * @interface EPICNaturalResponseInnerSunJ2000Position
 */
export interface EPICNaturalResponseInnerSunJ2000Position {
    /**
     * 太陽のJ2000座標のX値
     * @type {number}
     * @memberof EPICNaturalResponseInnerSunJ2000Position
     */
    'x'?: number;
    /**
     * 太陽のJ2000座標のY値
     * @type {number}
     * @memberof EPICNaturalResponseInnerSunJ2000Position
     */
    'y'?: number;
    /**
     * 太陽のJ2000座標のZ値
     * @type {number}
     * @memberof EPICNaturalResponseInnerSunJ2000Position
     */
    'z'?: number;
}
/**
 * 
 * @export
 * @interface NASABadResponse
 */
export interface NASABadResponse {
    /**
     * 
     * @type {number}
     * @memberof NASABadResponse
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof NASABadResponse
     */
    'msg'?: string;
    /**
     * 
     * @type {string}
     * @memberof NASABadResponse
     */
    'service_version'?: string;
}

/**
 * APODApi - axios parameter creator
 * @export
 */
export const APODApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 天文学の画像日報（APOD）を取得します。
         * @summary 天文学の画像日報
         * @param {string} [date] 取得したいAPOD画像の日付
         * @param {string} [startDate] 日付範囲の開始日。日付範囲でのデータを要求する場合に使用。&#x60;date&#x60;と一緒に使用できません。
         * @param {string} [endDate] 日付範囲の終了日。&#x60;start_date&#x60;と一緒に使用。
         * @param {number} [count] 指定した場合、ランダムに選ばれた&#x60;count&#x60;数の画像が返されます。&#x60;date&#x60;または&#x60;start_date&#x60;と&#x60;end_date&#x60;と一緒に使用できません。
         * @param {boolean} [thumbs] ビデオのサムネイルのURLを返します。APODがビデオでない場合、このパラメータは無視されます。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApod: async (date?: string, startDate?: string, endDate?: string, count?: number, thumbs?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/planetary/apod`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject(localVarQueryParameter, "api_key", configuration)

            if (date !== undefined) {
                localVarQueryParameter['date'] = (date as any instanceof Date) ?
                    (date as any).toISOString().substring(0,10) :
                    date;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substring(0,10) :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString().substring(0,10) :
                    endDate;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (thumbs !== undefined) {
                localVarQueryParameter['thumbs'] = thumbs;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * APODApi - functional programming interface
 * @export
 */
export const APODApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = APODApiAxiosParamCreator(configuration)
    return {
        /**
         * 天文学の画像日報（APOD）を取得します。
         * @summary 天文学の画像日報
         * @param {string} [date] 取得したいAPOD画像の日付
         * @param {string} [startDate] 日付範囲の開始日。日付範囲でのデータを要求する場合に使用。&#x60;date&#x60;と一緒に使用できません。
         * @param {string} [endDate] 日付範囲の終了日。&#x60;start_date&#x60;と一緒に使用。
         * @param {number} [count] 指定した場合、ランダムに選ばれた&#x60;count&#x60;数の画像が返されます。&#x60;date&#x60;または&#x60;start_date&#x60;と&#x60;end_date&#x60;と一緒に使用できません。
         * @param {boolean} [thumbs] ビデオのサムネイルのURLを返します。APODがビデオでない場合、このパラメータは無視されます。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApod(date?: string, startDate?: string, endDate?: string, count?: number, thumbs?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APODResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApod(date, startDate, endDate, count, thumbs, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['APODApi.getApod']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * APODApi - factory interface
 * @export
 */
export const APODApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = APODApiFp(configuration)
    return {
        /**
         * 天文学の画像日報（APOD）を取得します。
         * @summary 天文学の画像日報
         * @param {string} [date] 取得したいAPOD画像の日付
         * @param {string} [startDate] 日付範囲の開始日。日付範囲でのデータを要求する場合に使用。&#x60;date&#x60;と一緒に使用できません。
         * @param {string} [endDate] 日付範囲の終了日。&#x60;start_date&#x60;と一緒に使用。
         * @param {number} [count] 指定した場合、ランダムに選ばれた&#x60;count&#x60;数の画像が返されます。&#x60;date&#x60;または&#x60;start_date&#x60;と&#x60;end_date&#x60;と一緒に使用できません。
         * @param {boolean} [thumbs] ビデオのサムネイルのURLを返します。APODがビデオでない場合、このパラメータは無視されます。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApod(date?: string, startDate?: string, endDate?: string, count?: number, thumbs?: boolean, options?: any): AxiosPromise<APODResponse> {
            return localVarFp.getApod(date, startDate, endDate, count, thumbs, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * APODApi - object-oriented interface
 * @export
 * @class APODApi
 * @extends {BaseAPI}
 */
export class APODApi extends BaseAPI {
    /**
     * 天文学の画像日報（APOD）を取得します。
     * @summary 天文学の画像日報
     * @param {string} [date] 取得したいAPOD画像の日付
     * @param {string} [startDate] 日付範囲の開始日。日付範囲でのデータを要求する場合に使用。&#x60;date&#x60;と一緒に使用できません。
     * @param {string} [endDate] 日付範囲の終了日。&#x60;start_date&#x60;と一緒に使用。
     * @param {number} [count] 指定した場合、ランダムに選ばれた&#x60;count&#x60;数の画像が返されます。&#x60;date&#x60;または&#x60;start_date&#x60;と&#x60;end_date&#x60;と一緒に使用できません。
     * @param {boolean} [thumbs] ビデオのサムネイルのURLを返します。APODがビデオでない場合、このパラメータは無視されます。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof APODApi
     */
    public getApod(date?: string, startDate?: string, endDate?: string, count?: number, thumbs?: boolean, options?: RawAxiosRequestConfig) {
        return APODApiFp(this.configuration).getApod(date, startDate, endDate, count, thumbs, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * EPICApi - axios parameter creator
 * @export
 */
export const EPICApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 最新の自然色画像の日付に関するメタデータを取得します。
         * @summary 自然色画像を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEpicNatural: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/EPIC/api/natural`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            await setApiKeyToObject(localVarQueryParameter, "api_key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EPICApi - functional programming interface
 * @export
 */
export const EPICApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EPICApiAxiosParamCreator(configuration)
    return {
        /**
         * 最新の自然色画像の日付に関するメタデータを取得します。
         * @summary 自然色画像を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEpicNatural(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EPICNaturalResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEpicNatural(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EPICApi.getEpicNatural']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EPICApi - factory interface
 * @export
 */
export const EPICApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EPICApiFp(configuration)
    return {
        /**
         * 最新の自然色画像の日付に関するメタデータを取得します。
         * @summary 自然色画像を取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEpicNatural(options?: any): AxiosPromise<Array<EPICNaturalResponseInner>> {
            return localVarFp.getEpicNatural(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EPICApi - object-oriented interface
 * @export
 * @class EPICApi
 * @extends {BaseAPI}
 */
export class EPICApi extends BaseAPI {
    /**
     * 最新の自然色画像の日付に関するメタデータを取得します。
     * @summary 自然色画像を取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EPICApi
     */
    public getEpicNatural(options?: RawAxiosRequestConfig) {
        return EPICApiFp(this.configuration).getEpicNatural(options).then((request) => request(this.axios, this.basePath));
    }
}



