export class Constants {
    public static Messages = {
        NO_FRIENDS_FOUND: 'No Friends Found'
    };

    public static API_NAME = {
        USER_COUNT: 'user/get-total-counts',
        USER_LIST: 'user/get-users',
        FRIEND_LIST: 'user/get-friends',
        GET_TRANSACTION_HISTORY: 'transaction/get-transaction-history',
        GET_COMMISSION_DETAILS: 'transaction/get-commission',
        SAVE_COMMISSION_DETAILS: 'transaction/save-commission',
        GET_MONTHLY_USER_COUNTS: 'user/get-monthly-user-counts',
        GET_MONTHLY_TRANSACTION_HISTORY: 'transaction/get-transactions-count',
        GET_TRANSACTION_REPORT: 'transaction/get-report',
        GET_USER_REPORT: 'user/get-report',
        GET_TOTAL_REVENUE: 'transaction/get-total-revenue',

    };

    public static DATE_FORMAT = 'MM/DD/YYYY hh:mm A';

    public static CURRENCY_SYMBOL = '1.2-2';
    public static COOKIE_EXPIRE_TIME = 1;
}
