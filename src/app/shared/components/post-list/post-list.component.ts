import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { }

  /* GET 1 */
  // ngOnInit() {
  //   this.service.getPosts()
  //     .subscribe(response => {
  //       this.posts = response;
  //     });
  // }


/* GET 2 */
  ngOnInit() {
   this.showPost();
 }
 /* method to call get-api from app.service */
 showPost() {
   try {
     this.service.getPosts()
       .subscribe(
         resp => {
           this.posts = resp;
         },
         (error: Response) => {
           if (error.status === 404) {
             console.log(error, '404 error');
           } else {
             console.log(error, 'get error');
           }
         });
   } catch (e) {
     console.log(e, 'e');
   }
 }

 // ----------------

 /* POST 1 */
  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(resp => {
        post.id = resp;
        this.posts.splice(0, 0, post);
      });
  }

  /*PUT*/
  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        resp => {
          console.log(resp);
        },
        error => {
            console.log(error, 'put error');
        });
  }

  /*DELETE*/
  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(
        resp => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error => {
          console.log(error, 'delete error');
        });
  }

}
