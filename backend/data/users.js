import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Moha',
        email: 'moha@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Zico',
        email: 'zico@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    
]

export default users