# Roles

Every user in the system has roles. The roles can be used to restrict access to APIs. Internally they are used restrict users from doing crazy things such as

1. Accessing admin functionality and pages
2. Accessing other user's data

## Default Roles
Chazos has the following default roles

1. admin 
2. user
3. writer
4. everyone

:::caution

If you remove the admin and user roles, all hell may break loose. Before you remove these make sure you know what you are doing!. Dont say I didnt want you

:::

## Adding Roles

You can add roles from `Settings > Roles`

#### Role Table
![Role Table](/img/docs/role_table.jpeg)

In the meantime you can see and add roles. I have to sit down and think about the best way to implement delete and edit features. 

#### Adding a role
![Create Role](/img/docs/create_role.jpeg)

Enter role name and press `Save`. Guard name is still readonly, sorry for that😥.



