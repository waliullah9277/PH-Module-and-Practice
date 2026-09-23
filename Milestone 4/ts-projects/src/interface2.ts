type UserRole = 'admin' | 'user' | 'moderator' | 'guest';

interface User {
    name: string;
    role: UserRole;
    email: string;
    phone?: number;
}

interface extendedUser extends User {
    address: string;
    isAdmin: boolean;
}
