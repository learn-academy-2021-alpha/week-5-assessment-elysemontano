# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

    --   rails new app_name -d postgresql -T

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

    --   In Terminal:  rails g migration AddForeignKey foreign_key:integer
            (in the terminal this prompts a new migration file inside the database)
    --   In Text Editor - inside new migration file:  add_column :model, :foreign_key:, :integer
            (this sets the proper column addition to the migration to add to the schema)
    --   In Terminal:  rails db:migrate
            (this initiates the migrate file to the schema and finalizes the change/addition)

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

    --   rails g model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

    -- The naming convention for a Rails model is singular and uppercase.  However the table file name will now become snake_case and plural inside the app

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

    -- The book would contain the foreign key as it belongs to a library.  The foreign key would be named "library id" to refer to the library's primary key.

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
    -- The schema file is the shape or template of the database and how data should be entered into the database including name and datatype.  You should not modify the schema directly as it is more of a snapshot of the structure and does not directly modify the database layout.  Modifying it would potentially cause confusion and for both the developer and possibly the app itself.
