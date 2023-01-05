export interface RentalProps {
    id: number;
    img: string;
    street: string;
    price: number;
    paymentPlan:string
    type: string;
}

export const RentalData:RentalProps[] = [
    {
        id:1,
        img: 'src/assets/rentals/rent1.jpg',
        street:'5678 Lombard Street, san francisco, CA, 94810',
        price: 1300,
        paymentPlan: 'Monthly',
        type: 'Private Room'
    },
    {
        id:2,
        img:  'src/assets/rentals/rent2.jpg',
        street:'9078 Haight  Street, san francisco, CA, 99110',
        price: 1000,
        paymentPlan: 'Monthly',
        type: 'Private Room'
    },
    {
        id:3,
        img:  'src/assets/rentals/rent3.jpg',
        street:'9978 Castro Street, san francisco, CA, 99410',
        price: 2500,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:4,
        img:  'src/assets/rentals/rent4.jpg',
        street:'5678 Valencia Street, san francisco, CA, 49340',
        price: 3000,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:5,
        img:  'src/assets/rentals/rent5.jpg',
        street:'2743 Valencia Street, san francisco, CA, 8931',
        price: 3200,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:6,
        img:  'src/assets/rentals/rent6.jpg',
        street:'8733 Embarcadero Street, san francisco, CA, 9860',
        price: 3400,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:7,
        img:  'src/assets/rentals/rent7.jpg',
        street:'890 Grant Avenue, san francisco, CA, 7545',
        price: 2500,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:8,
        img:  'src/assets/rentals/rent8.jpg',
        street:'890 Divisadero, san francisco, CA, 7545',
        price: 3500,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:9,
        img: 'src/assets/rentals/rent9.jpg',
        street:'5678 Lombard Street, san francisco, CA, 94810',
        price: 1200,
        paymentPlan: 'Monthly',
        type: 'Private Room'
    },
    {
        id:10,
        img:  'src/assets/rentals/rent3.jpg',
        street:'9978 Castro Street, san francisco, CA, 99410',
        price: 2500,
        paymentPlan: 'Monthly',
        type: 'Private house'
    },
    {
        id:11,
        img:  'src/assets/rentals/rent11.jpg',
        street:'2743 Valencia Street, san francisco, CA, 8931',
        price: 3200,
        paymentPlan: 'Monthly',
        type: 'Private room'
    },
    {
        id:12,
        img: 'src/assets/rentals/rent12.jpg',
        street:'5678 Lombard Street, san francisco, CA, 94810',
        price: 1200,
        paymentPlan: 'Monthly',
        type: 'Private Room'
    },
    ]