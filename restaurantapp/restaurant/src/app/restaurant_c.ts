import { Time } from "@angular/common";

export class restaurant
{
    constructor(
        public  r_name: string,
        public r_city: string,
        public r_area: string,
        public r_contactno: string,
        public r_start_time: Time,
        public r_end_time: Time,
        public r_img:string
    ){}
}