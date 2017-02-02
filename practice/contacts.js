var contacts = [
{
firstName: 'Дмитрий',
lastName: 'Бондарчук',
phones: [
"88889992233",
"83332224423"
]
}
];

function addContact(obj) {
 contacts.push(obj);
}

var firstName = prompt('Введите имя');
var lastName = prompt('Введите фамилию');

var phones = [];

while(true) {
var phone = prompt('Введите номер телефона или 0');

if(phone == '0') break;

phones.push(phone);
}
addContact(firstName, lastName, phones);