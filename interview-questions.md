# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:

  MVC means Model-View-Controller.  The model is the database, view is the user experience and controller is the interaction between the database and user.

  Researched answer:

    Model stands for the database, View stands for the UI, and Controller is the flow between the Model and View.  

2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:

  Create - This is where content is created for the application
  Read - This is how it is viewed from a user standpoint (View)
  Update - This is where data and content is modified
  Delete - This is where data and content is removed

  Researched answer:

    Create - Post
    Read - Get
    Update - Put/Patch
    Delete - Delete

3. What is a relational database? Are there other kinds of databases?

  Your answer:

  A relational database is formed in the structure of rows and columns where information can be accessed 'relationally'.  Yes there are other databases that have a looser way of holding data.

  Researched answer:

    A relational database stores information into tables that consist of rows and columns.  Relationships between different tables are created.  Other types of databases are called non-relational or NOSQL, which typically store info into documents.

4. What are the 5 HTTP verbs? What are they important?

  Your answer:

  I believe HTTP stands for Hyper-Text Transfer Protocol.  Hyper-text language has become the main container that is passed(transferred) over the internet.  This has become the protocol that the web flow has adopted.

  Researched answer:

    HTTP verbs = get, post, put, patch, and delete.  All request paths fall into one of these verbs

5. What is object-relational mapping?

  Your answer:

  I believe object- relational mapping is where you are making a query to find a specific item using the object syntax of key value pairs.

  Researched answer:

    Object relational mapping transforms ruby objects into a query that allows information to be passed between incompatible systems.

6. What is a gem?

  Your answer:

  A gem is a dependency that is created when rails application has been created.  Similar to a node module inside of a React app.

  Researched answer:

    A gem is a package manager or library of code that is an extention to ruby.

7. What are primary keys? Why are they important?

  Your answer:

  A primary key is a reference number that is generated automatically with rails when adding a row into a table.  The primary key becomes an easy and quick way to refer to a specific row in a table and can be used with association tables on what a specific item belongs.

  Researched answer:

    A primary key is a unique identifier for a row in a 'parent' table that is automatically generated when a new row is added to the table.  This id becomes an easy access point for both general queries or when referencing a specific row in a 'child' table.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes  -- are attempts to bring operations in a program to an HTTP request
- JSON  -- is text written in Javascript object notation used for storing and exchanging data 
- Validations  -- ensure only valid data is saved.
- Strong params  -- prevents assigning request parameters that do not have permission to do so.
