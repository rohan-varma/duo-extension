(define (something x)
  (call/cc (lambda (cc)
            (display "I got here.\n")
            (cc x)
            (display "But not here.\n")))
	)

(define (stuff x y z)
	; first add x and y
	(call/cc (lambda (cc)

	(let 
		(( k (+ y z)))
		(cond
			((= k 0) (cc x))
			(#t (/ x k))
			)
		)
	)
	)
	)

