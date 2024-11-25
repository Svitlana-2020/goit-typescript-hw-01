type newUser = {
      name: string;
      surname: string;
      email: string;
      password: string;
    }
    
    function createOrUpdateUser(initialValues:Partial< newUser>): newUser {
      // Оновлення користувача
    const defaultUser:newUser = {
        name: "",
        surname: "",
        email: "",
        password: "",
    }
    return { ...defaultUser, ...initialValues };
    }
    
    const newUser = createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123',
    });
    