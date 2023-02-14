export interface IDog{
    dogs: IDog[];
    status: string;
    message: string;
}

export interface IDogProps{
    status: string;
    message: string;
}


export interface credentials{
    email: string;
    password : string;
}