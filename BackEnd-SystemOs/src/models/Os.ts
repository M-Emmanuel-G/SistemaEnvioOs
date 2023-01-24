export class Os{
    constructor(
        protected client :string,
        protected model :string,
        protected user :string,
        protected password :string,
        protected ip :string,
        protected http_Port :string,
        protected service_Port :string,
        protected storage :string,
        protected recording_Days:string,

    ){}
}

export type OsType =  {
    osNumber:number,
    model :string,    
    client :string,
    user :string,
    password :string,
    ip :string,
    http_Port :string,
    service_Port :string,
    storage :string,
    recording_Days:string,
}