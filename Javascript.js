let a=parseInt(prompt('So tien ban dau: '));
let b=parseInt(prompt('so thang vay: '));
let c=0;
let interest;

if(6<b && b<12){
    c=7.4
    interest=a*c;
    alert('So tien lai nhan duoc la : '+interest);
}else if(3<b && b<6){
    c=7.2
    interest=a*c;
    alert('So tien lai nhan duoc la : '+interest);
}else if (b>0 && b<3) {
    c=0.5
    interest=a*c;
    alert('So tien lai nhan duoc la : '+interest);
} else {
    alert('Nhap lai so thang deee : ');
}