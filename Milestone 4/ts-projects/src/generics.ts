interface Response<T> {
    status: number;
    message: string;
    data: T;
}

const transactionResponse: Response<{ transactionId: string; amount: number }> = {
    status: 200,
    message: "Transaction successful",
    data: {
        transactionId: "TXN123456",
        amount: 150.75
    }
};