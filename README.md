# Models:
There are 2 models in this Schema 1: Author Model & 2: Blog Model as per the structure provided.

# Route - Step to create the Author model and Blog Model
1. /BASE_URL/authors' = This would be post API to create the author.
2. '/blogs'= This would be post API to create the blog.
3. /update/blogId/:id' = This PUT API helps to update the elements in the blog document.
4. /delete/blogId/:id = This GET API helps to delete the blog document as per the blog ID provided.
5. /deleteSpecific = This GET API help to delete the blog document as per specific input fields like category, tag name etc. This would act as an alternative to the  /delete/blogId/:id if user forgets the blog ID.
6. /login = This POST API helps to logs the user to the website after validation.

Note: Each of the models has 5 documents each in the database.

# Controller:
There are 2 controller in this project as below.
1. AuthorController : We have a one function inside called "createAuthor", which creates the author details in our database.
2. BlogController: We have 5 functions inside this controller, which performs the following CRUD operations.
    - myBlogCreation : This function helps to create the blog document inside our database after author validation.
    - returnBlogsFiltered: This function helps to return as per filter inputted by the user which are not deleted and are published.
    - updateData: This function help to update existing blog documents fields like title, body, tags etc according to user input after authorization.
    - deleteBlog: This function help to flag a blog document as true as per the blog ID input provided by the user after authorization.
    - deleteSpecific: This function help to flag a blog document as true which are not published as per the specific fields like category, authorid, tag name inputted by the user.
3. LoginController: We have 1 function inside this controller, which enables the user to login.
    - logIn: This function validates the user by its email and password and sends an encrypted token to the front end system.

# Midlleware:
We have 1 validation middleware.
1. validation: This function helps in decoding the token received from the request header and authenticates the user and also sends the decoded user ID to the next controller for authorisation.
