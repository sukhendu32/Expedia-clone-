# constructProject1


# Sign-in/Sign-up page

 Details about sign up page

 * In the sign up page we can sing up by entering our email, first name, last name,  and password.
 * We can only sign up once with the one email.
 * All the field are required in the form.
 * The form will take out data and it will store it in local storage.
  And then we will be redirected to sign in page.
------------------------------------------------------------
 Details about sign in page

 * After landing to the sign in page you will have to sign in to continue.
 * We will fill the email and password.
 * Then by submitting our email and password will be checked that if they exist in  local storage or not.
 * Now if the email and password matches with the existing data in local storage  you will be redirected to the home page.
 * else you will get an alert massage.
 Collapse

# Home page

  thank you abhay , i am nishchay gupta
  i have created the landing page of this website
  at top of the website here i have created navbar
  with logo and some relevant links
  and also as you can see user name abhay
  as he has logined let us move further
  on the next section here i have created all
  are input fields on the first input 
  field we have to enter the name of place where hotel
  and on the next field we have to enter check in and on the
  last input field you have to enter check out date
  moving on next section
  i have created divs with articles of popular places 
  on the 
  bottom section i have created footer with 
  relevant information
  now let us search for a particular place like goa
  after filling 
  these fields and click on the search
  button then we will be
  redirected to the goa page where 
  it will show all the hotels 
 
  now my colleague vikas will take over from here
  thank you




# Product page(Different Hotels Detail)



* The detail of a hotel is created in a div. and all the div's containing different hotel detail are appended in the body of HTML using a Java Script higher-order function forEach().

* For sorting the function according to their price or rating in-build sort function has been used.

* The page has been made responsive for all screen types for that Media Query has been used for different screen sizes. 
* If we click on Fairfield by Marriott Goa Anjuna it will redirect us to that page.


# Hotel Detail Fairfield by Merriott Anjuna........

In our project, we've particularly worked only on Goa destination and hotel Fairfield by Marriott Goa Anjuna. If one selects this hotel one can go to the site of the same hotel wherein one can see all the hotel details. At the bottom right corner of the image gallery, one can see the button, after clicking that button you will be able to land on the page of the photos where you can sort the photos according to the sections given. Now after clicking on the back button you will again land on the hotel page. If you click on the Reserve a Room button you will go to the section of room space where you can see the rooms that are available. Now select the check-in and check-out date as well as you can increase the no of travelers and rooms as well. Once you click on the Check Availability button, you will see the available rooms. If you're selecting the number of travelers more than 2 times as the rooms that you have selected the window will pop up showing the msg that “The available rooms can’t accommodate (number of travelers you mentioned) guests. Add another room”.  The message appears because the available rooms can only accommodate 2 people. Then try adding more rooms and again click on Check Availability. Once you're done, scroll down on room space. Now you will be able to see the options, you have to select the options that you want to choose. After that make sure that you’re clicking the Click to Confirm button. Below the Click to confirm button you will be able to see the total cost per night including the option price that you have selected and below that there is a total cost which is calculated considering the number of rooms you're booking from check-in to check-out date also it includes 18% tax on hotel expense and food expense. Once you click the Reserve (Number of Room) Room button you will be redirected to the payment page.




# Payment Page:

* This page contains the hotel details like hotel name, check-in and check-out dates, the number of travelers, the number of night rooms booked, and the number of rooms booked.
* In the price details, the price is calculated like this "number of rooms * Number of the night * price of room per night" and taxes also included by adding these two total prices are displayed.
* promo code is "SUMMER30", in the total price 30% will be deducted.
All the required fields should be filled in the payment section otherwise it will show an alert message.
* "For all the above mentioned functionalities data is taken from previous page (locaStorage) you have to follow the correct process of previous page"