export default class customError extends Error{
    constructor(message,statusCode,errorCode){
        super(message)
        this.status=statusCode
        this.error =errorCode
    }
}

// la har shwenik returny errorman krd la shweni custom error aka ama call akain agar
//  error i trman habei la errori serveraka jya bet ama bakar ahenin
// throw new CustomError("not user fount",404,"5000") example
// ama jyawaza la throw Errror i e&tyadi labar awai parameteri zyatra