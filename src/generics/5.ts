export enum UserRole {
      admin = 'admin',
      editor = 'editor',
      guest = 'guest',
    }
    type UserRolesStatuses = Record<UserRole,{isTrue: boolean; description: string}>;

    // Замініть наступний код на версію за допомогою Record
    const RoleDescription: UserRolesStatuses = {
          [UserRole.admin]:{isTrue: true, description: 'Admin User'},
      [UserRole.editor]: {isTrue:false, description: 'Editor User'},
      [UserRole.guest]: {isTrue:false, description: 'Guest User'},
    };
    RoleDescription;
    