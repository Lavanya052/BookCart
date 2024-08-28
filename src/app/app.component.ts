import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookMart';


  ngOnInit(){
    // Initialize Firebase
  initializeApp(firebaseConfig);
  const books = [
    {
      id:'1',
      name:"JavaScript for Modern Web Development ",
      author:"Alok Ranjan,Ranjit Battwad",
      categories:"Programming and Web development",
      desc:"The users on an eventful journey of simplifying and understanding advanced concepts of JavaScript. Since JavaScript is the core programming language for almost every interaction on the web, this book will make it easier for readers to develop modern cutting-edge web applications.",
      image:"https://m.media-amazon.com/images/I/81-LPLWfKhL._AC_UF1000,1000_QL80_.jpg",
      quantity:1,
      price:450
    },
    {
      id:'2',
      name:"HTML & CSS: THE COMPLETE REFERENCE",
      author:"Thomas Powell ",
      categories:"Programming and Web development",
      desc:"The Definitive Guide to HTML & CSS--Fully UpdatedWritten by a Web development expert, the fifth edition of this trusted resource has been thoroughly revised and reorganized to address HTML5, the revolutionary new Web standard.",
      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3ia8FUD43nDrE6kaNtKqxIrEuI5CId4A8Abb9NO4B32coqg41hC-G0rJMv85EA-X84UXJpBKS8wq3ALJh9f549oePR6jRvU7ycUGPQ6kF&usqp=CAc",
      quantity:1,
      price:560
    },
    {
      id:'3',
      name:"Modern Web Development with Go",
      author:"Dušan Stojanović",
      categories:"Programming language",
      desc:"In this book, we are going to learn how to design, develop and deploy Web Server Applications using the Go programming language. In recent years, Go has become the industrial standard for these kinds of applications; so by learning this, a lot of good opportunities can be opened in the market.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsCOrIMtCF-tXvBMkB4X4SY72XzvDliDxHQ&s",
      quantity:1,
      price:800
    },
    {
      id:'4',
      name:"Web Development with Django",
      author:"Ben Shaw, Saurabh Badhwar",
      categories:"Backend dev",
      desc:"Then the Django framework is where you should begin. Often referred to as a 'batteries included' web development framework, Django comes with all the core features needed to build a standalone application. Web Development with Django takes this philosophy and equips you with the knowledge and confidence to build real-world applications using Python. ",
      image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrfOqtamVXZPmTHaJoD-JpROZLq57cBctGkcRIoCXBMmhl0xR7D8RuZ-UIaoi60yFfXVw2BgaipPkOUeo9IEuV-cusRjpKC26gebS-cTWa89UjvOz4WMUj&usqp=CAc",
      quantity:1,
      price:680
    },
    {
      id:'5',
      name:"Hands-On Server-Side Web Dev with Swift",
      author:"Angus Yeung",
      categories:"Backend dev",
      desc:"This book is about building professional web applications and web services using Swift 4.0 and leveraging two popular Swift web frameworks: Vapor 3.0 and Kitura 2.5. In the first part of this book, we’ll focus on the creation of basic web applications from Vapor and Kitura boilerplate projects.",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaHo2iQlMDsKTz2CxBBSYli-PLTUlwYf6eeETFUMPyOPC8ci4Gfy_qO6XwaE7Sfr8WDT8Up5m35kHuaicH0YVS8_A8OXt7Ng_YsNGelQRSjxVG3EGozZ98&usqp=CAc",
      quantity:1,
      price:450
    },
    {
      id: '6',
      name: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      categories: 'Programming and Web development',
      desc: 'This book provides a thorough introduction to the JavaScript programming language. It covers basic and advanced concepts, making it suitable for both beginners and experienced developers.',
      image: 'https://m.media-amazon.com/images/I/41VvIauMuuL._SY445_SX342_.jpg',
      quantity: 1,
      price: 620
    },
    {
      id: '7',
      name: 'Learning React:A Guide to Building Web Applications Using React ',
      author: 'Kirupa Chinnathambi',
      categories: 'Frontend development',
      desc: 'A comprehensive guide to learning React and Redux for building modern web applications. It covers fundamental concepts, best practices, and practical examples.',
      image: 'https://m.media-amazon.com/images/I/51xF1x5cVzS._SX342_SY445_.jpg',
      quantity: 1,
      price: 580
    },
    {
      id: '8',
      name: 'Python Course,Project Introduction to Programming',
      author: 'Eric Matthes',
      categories: 'Programming language',
      desc: 'An introductory book to Python programming language, suitable for beginners. It covers basic syntax, data structures, and provides hands-on projects to reinforce learning.',
      image: 'https://m.media-amazon.com/images/I/51JcFufVwGL._SY445_SX342_.jpg',
      quantity: 1,
      price: 520
    },
    {
      id: '9',
      name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      categories: 'Software development',
      desc: 'This book focuses on writing clean, readable, and maintainable code. It covers principles, patterns, and practices that help developers produce high-quality software.',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL._SY445_SX342_.jpg',
      quantity: 1,
      price: 700
    },
    {
      id: '10',
      name: 'The Pragmatic Programmer: Your Journey to Mastery',
      author: 'David Thomas, Andrew Hunt',
      categories: 'Software development',
      desc: 'A classic book on software development, updated for its 20th anniversary edition. It offers timeless advice, practical tips, and real-world examples for becoming a better programmer.',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL._SY445_SX342_.jpg',
      quantity: 1,
      price: 750
    },
  ];

  // Store the books array in session storage
  localStorage.setItem('books', JSON.stringify(books));
}
}
