export class User {
    constructor(
        public id: number,
        public name: string,
        public gender: string,
        public birth_year: string,
        public mass?: string,
        public height?: string,
        public hair_color?: string,  
        public skin_color?: string, 
        public eye_color?: string, 

    ) { }
}
