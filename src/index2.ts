interface User {
    username: string;
    email: string;
    age: number;
}

interface Admin extends User {
    adminLevel: number; // Propiedad específica para Admin
}

class UserData {
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    printUserData(): void {
        console.log(`Username: ${this.user.username}`);
        console.log(`Email: ${this.user.email}`);
        console.log(`Age: ${this.user.age}`);

        // Verifica si el usuario es un Admin
        if ('adminLevel' in this.user) {
            console.log(`Admin Level: ${(this.user as Admin).adminLevel}`);
        }
    }
}

// Ejemplo de uso
const regularUser: User = {
    username: "johndoe",
    email: "johndoe@example.com",
    age: 30
};

const adminUser: Admin = {
    username: "adminUser",
    email: "admin@example.com",
    age: 35,
    adminLevel: 1
};

// Crear instancias de UserData y imprimir datos
const userData1 = new UserData(regularUser);
userData1.printUserData();

const userData2 = new UserData(adminUser);
userData2.printUserData();
