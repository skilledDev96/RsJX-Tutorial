import { Observable , timer, of , from, fromEvent , interval} from "rxjs";
import { map,filter,reduce,take,scan,tap, mergeMap, switchMap, concatMap, exhaustMap} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//OBSERVABLE
// const observable = new Observable((subscriber) => {
//     setInterval(() => {
        
//     subscriber.next('hello World')
//     }, 1000);
//     subscriber.complete()
// })

// console.log('before')

// observable.subscribe({
//     next: (value) => {
//         console.log(value)
//     },
//     complete: () => {
//         console.log('Complete Called!')
//     },
//     error: (err) => {
//         console.log(err)
//     }
// })

// console.log('after')


//TIMER
// const observable =  timer(0, 1000
// )


// observable.subscribe( 
//     console.log
//     )


//FORMEVENT
// const observable =  fromEvent(
//     document, 'click'
// )


// observable.subscribe( 
//     console.log
//     )

//OF
// const observable =  of(1,2,3,4,5)

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete ()  {
//         console.log('Complete Called!')
//     }
// })

// console.log('hello')

//FROM
// const observable =  from(fetch('https://jsonplaceholder.typicode.com/todos/1'))
// // const observable=  from(['Ruan'])

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete ()  {
//         console.log('Complete Called!')
//     }
// })

// console.log('hello')

//MAP
// const observable =  of(1,2,3,4,5)

// const numbersWithSymbols = observable.pipe(
//     map((value) => `$${value}`)
// )

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete ()  {
//         console.log('Complete Called!')
//     }
// })

//FILTER
// const observable =  fromEvent(document, 'keydown').pipe(
//    //Making one line
//     map((event) => {
//     return event.code === 'Space'? event.code : null
//    })

//     //Best practise to use operators for each objective 
//     // map(event => event.code),
//     // filter((code) => code === 'Space' )
// )

// const subscription = observable.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     complete ()  {
//         console.log('Complete Called!')
//     }
// })

//Reduce + take + scan
// const observable =  interval(500).pipe(
//     take(5),
//     // reduce(
//     // (acc, value) => acc + value ,
//     // 0
//     // ),
//     scan(
//     (acc, value) => acc + value ,
//     0
//     )
// )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })
 
//tap
// const observable =  interval(500).pipe(
//     take(5),
//     tap(console.log),
//     reduce(
//     (acc, value) => acc + value ,
//     0
//     )
// )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })

//Flattening Operators
const button = document.querySelector('#btn')
// const observable =  fromEvent(
//     button, 'click'
//     ).pipe(
//         map(() => {
//             return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1")
//         })
//     )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })

//mergeMap
//  const observable =  fromEvent(
//     button, 'click'
//     ).pipe(
//         mergeMap(() => {
//             return interval(1000).pipe(
//                 tap(console.log),
//                 take(5)
//             )
//         })
//     )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })

 //switchMap
//  const observable =  fromEvent(
//     button, 'click'
//     ).pipe(
//         switchMap(() => {
//             return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").pipe(
//                 take(5),
//                 tap({
//                     complete(){
//                         console.log('inner Observable Completed')
//                     }
//                 })
//             )
//         })
//     )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })

  //concatMap
//   const observable =  fromEvent(
//     button, 'click'
//     ).pipe(
//         concatMap(() => {
//             return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").pipe(
//                 take(5),
//                 tap({
//                     complete(){
//                         console.log('inner Observable Completed')
//                     }
//                 })
//             )
//         })
//     )
 
//  const subscription = observable.subscribe({
//      next(value) {
//          console.log(value)
//      },
//      complete ()  {
//          console.log('Complete Called!')
//      }
//  })

   //exhaustMap - Example Submitting Forms , avoiding duplicate subscriptions being made
   const observable =  fromEvent(
    button, 'click'
    ).pipe(
        exhaustMap(() => {
            return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").pipe(
                take(5),
                tap({
                    complete(){
                        console.log('inner Observable Completed')
                    }
                })
            )
        })
    )
 
 const subscription = observable.subscribe({
     next(value) {
         console.log(value)
     },
     complete ()  {
         console.log('Complete Called!')
     }
 })