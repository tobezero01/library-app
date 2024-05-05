package com.luvcode.springbootlibrary.controller;

import com.luvcode.springbootlibrary.entity.Book;
import com.luvcode.springbootlibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @GetMapping("/secure/currentloans/count")
    public int currentLoansCount() {
        String userEmail = "testsuer@gmail.com";

        return bookService.currentLoansCount(userEmail);
    }

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(@RequestParam Long bookId) {
        String userEmail = "testsuer@gmail.com";

        return bookService.checkoutBookByUser(userEmail, bookId);
    }
    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId) throws Exception {
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBook(userEmail,bookId);
    }
}
