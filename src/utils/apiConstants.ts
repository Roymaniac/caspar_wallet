export const HTTPStatusCode = {
    SERVER_ERR_CODE: 500,
    BAD_REQ_ERR_CODE: 400,
    NOT_FOUND_ERR_CODE: 404,
    AUTH_ERR_CODE: 401,
    VALIDATION_ERR_CODE: 422,
    GOOD_REQ_CODE: 200,
    CREATED_CODE: 201,
    AUTH_TOKEN_EXP: 60,
    OTP_DEFAULT_LENGTH: 4,
    MAX_PROFILE_PIC_SIZE: 2048,

    USER_TYPE: {
        USER: 'User',
        ADMIN: 'Admin'
    },

    GENDERS: {
        MALE: 'Male',
        FEMALE: 'Female',
        OTHERS: 'Others',
    },

    TRANSACTION_STATUS: {
        PENDING: 0,
        SUCCESSFUL: 1,
        FAILED: 2,
        CANCELLED: 3,
    },

    SOCIAL_PROVIDERS: {
        GOOGLE: 'google',
    },

    PAGINATION: {
        SIZE_WEB: 50,
        SIZE_API: 20,
    },

};

export type ApiConstants = typeof HTTPStatusCode;