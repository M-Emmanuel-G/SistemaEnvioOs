import { CustomError } from './customError';

export class NotInserted extends CustomError{
    constructor(){
        super(400, 'Todos os dados precisam ser inseridos...')
    }
}

export class IsNaN extends CustomError{
    constructor(){
        super(400, 'Formato de dado incorreto. Precisa ser somente numeros.')
    }
}

export class IsNotString extends CustomError{
    constructor(){
        super(400, 'Formato de dado incorreto.')
    }
}

export class InvalidformatEmail extends CustomError{
    constructor(){
        super(400, 'formato do email incorreto, deve conter @ e .com')
    }
}

export class EmailExist extends CustomError{
    constructor(){
        super(400, 'Este EMAIL ja está sendo utilizado')
    }
}

export class CpfExist extends CustomError{
    constructor(){
        super(400, 'Este CPF ja está sendo utilizado')
    }
}