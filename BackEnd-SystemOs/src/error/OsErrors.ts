import { CustomError } from './customError';

export class NotInserted extends CustomError{
    constructor(){
        super(400, 'Todos os dados precisam ser inseridos...')
    }
}

export class IsNaN extends CustomError{
    constructor(){
        super(400, 'Formato de dado incorreto. Precisa ser um numero.')
    }
}

export class IsNotString extends CustomError{
    constructor(){
        super(400, 'Formato de dado incorreto.')
    }
}



