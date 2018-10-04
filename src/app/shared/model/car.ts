export class Car {

    constructor ( public id:number, 
        public brand:string, 
        public name:string, 
        public model:string, 
        public year:number, 
        public price:number, 
        public thumb:string, 
        public description:string,
        public phone?:string,
        public gallery?:string[]
    ) {}
}