JsOsaDAS1.001.00bplist00�Vscriptoa < ! - -Qh<R�`��fo_ Y� - - > 
   
 !   f u n c t i o n ( )   { 
     / /\��e�l��S�)NKTQ�\e�N�Y'\ 
     f u n c t i o n   g e t _ a t t r i b u t e ( n o d e ,   a t t r ,   d e f a u l t _ v a l u e )   { 
         r e t u r n   n o d e . g e t A t t r i b u t e ( a t t r )   | |   d e f a u l t _ v a l u e ; 
     } 
     / /\��e�l��S�)NKTQ�\e�N�Y'\ 
     f u n c t i o n   g e t _ b y _ t a g n a m e ( n a m e )   { 
         r e t u r n   d o c u m e n t . g e t E l e m e n t s B y T a g N a m e ( n a m e ) ; 
     } 
     / /��S֑MnS�ep 
     f u n c t i o n   g e t _ c o n f i g _ o p t i o n ( )   { 
         v a r   s c r i p t s   =   g e t _ b y _ t a g n a m e ( " s c r i p t " ) , 
             s c r i p t _ l e n   =   s c r i p t s . l e n g t h , 
             s c r i p t   =   s c r i p t s [ s c r i p t _ l e n   -   1 ] ;   / /_SRMR��}v� s c r i p t 
         r e t u r n   { 
             l :   s c r i p t _ l e n ,   / /�^��u(N�ub i du( 
             z :   g e t _ a t t r i b u t e ( s c r i p t ,   " z I n d e x " ,   - 1 ) ,   / / z - i n d e x 
             o :   g e t _ a t t r i b u t e ( s c r i p t ,   " o p a c i t y " ,   0 . 5 ) ,   / / o p a c i t y 
             c :   g e t _ a t t r i b u t e ( s c r i p t ,   " c o l o r " ,   " 0 , 1 0 2 , 1 5 3 " ) ,   / / c o l o r 
             n :   g e t _ a t t r i b u t e ( s c r i p t ,   " c o u n t " ,   1 9 9 )   / / c o u n t 
         } ; 
     } 
     / /��n c a n v a sv���[� 
     f u n c t i o n   s e t _ c a n v a s _ s i z e ( )   { 
         c a n v a s _ w i d t h   =   t h e _ c a n v a s . w i d t h   =   w i n d o w . i n n e r W i d t h   | |   d o c u m e n t . d o c u m e n t E l e m e n t . c l i e n t W i d t h   | |   d o c u m e n t . b o d y . c l i e n t W i d t h , 
         c a n v a s _ h e i g h t   =   t h e _ c a n v a s . h e i g h t   =   w i n d o w . i n n e r H e i g h t   | |   d o c u m e n t . d o c u m e n t E l e m e n t . c l i e n t H e i g h t   | |   d o c u m e n t . b o d y . c l i e n t H e i g h t ; 
     } 
   
     / /~�R6��z 
     f u n c t i o n   d r a w _ c a n v a s ( )   { 
         c o n t e x t . c l e a r R e c t ( 0 ,   0 ,   c a n v a s _ w i d t h ,   c a n v a s _ h e i g h t ) ; 
         / /��g:v�~�gaT�_SRMOMn�TTep~� 
         v a r   e ,   i ,   d ,   x _ d i s t ,   y _ d i s t ,   d i s t ;   / /N4e���p� 
         / /�MS�Ytk�N N*p� 
         r a n d o m _ p o i n t s . f o r E a c h ( f u n c t i o n ( r ,   i d x )   { 
             r . x   + =   r . x a , 
             r . y   + =   r . y a ,   / /y�R� 
             r . x a   * =   r . x   >   c a n v a s _ w i d t h   | |   r . x   <   0   ?   - 1   :   1 , 
             r . y a   * =   r . y   >   c a n v a s _ h e i g h t   | |   r . y   <   0   ?   - 1   :   1 ,   / /x�R0��uL�S�TS�_9 
             c o n t e x t . f i l l R e c t ( r . x   -   0 . 5 ,   r . y   -   0 . 5 ,   1 ,   1 ) ;   / /~�R6N N*[���N: 1v�p� 
             / /N�NN N*p�_ Y� 
             f o r   ( i   =   i d x   +   1 ;   i   <   a l l _ a r r a y . l e n g t h ;   i + + )   { 
                 e   =   a l l _ a r r a y [ i ] ; 
                 / /  _SRMp�[XW( 
                 i f   ( n u l l   ! = =   e . x   & &   n u l l   ! = =   e . y )   { 
                     x _ d i s t   =   r . x   -   e . x ;   / / x�t��y�   l 
                     y _ d i s t   =   r . y   -   e . y ;   / / y�t��y�   n 
                     d i s t   =   x _ d i s t   *   x _ d i s t   +   y _ d i s t   *   y _ d i s t ;   / /`;��y� ,   m 
   
                     d i s t   <   e . m a x   & &   ( e   = = =   c u r r e n t _ p o i n t   & &   d i s t   > =   e . m a x   /   2   & &   ( r . x   - =   0 . 0 3   *   x _ d i s t ,   r . y   - =   0 . 0 3   *   y _ d i s t ) ,   / /�`��v�e�PR�� 
                         d   =   ( e . m a x   -   d i s t )   /   e . m a x , 
                         c o n t e x t . b e g i n P a t h ( ) , 
                         c o n t e x t . l i n e W i d t h   =   d   /   2 , 
                         c o n t e x t . s t r o k e S t y l e   =   " r g b a ( "   +   c o n f i g . c   +   " , "   +   ( d   +   0 . 2 )   +   " ) " , 
                         c o n t e x t . m o v e T o ( r . x ,   r . y ) , 
                         c o n t e x t . l i n e T o ( e . x ,   e . y ) , 
                         c o n t e x t . s t r o k e ( ) ) ; 
                 } 
             } 
         } ) ,   f r a m e _ f u n c ( d r a w _ c a n v a s ) ; 
     } 
     / /R^�u;^�^vm�R�R0 b o d yN- 
     v a r   t h e _ c a n v a s   =   d o c u m e n t . c r e a t e E l e m e n t ( " c a n v a s " ) ,   / /u;^ 
         c o n f i g   =   g e t _ c o n f i g _ o p t i o n ( ) ,   / /�Mn 
         c a n v a s _ i d   =   " c _ n "   +   c o n f i g . l ,   / / c a n v a s   i d 
         c o n t e x t   =   t h e _ c a n v a s . g e t C o n t e x t ( " 2 d " ) ,   c a n v a s _ w i d t h ,   c a n v a s _ h e i g h t , 
         f r a m e _ f u n c   =   w i n d o w . r e q u e s t A n i m a t i o n F r a m e   | |   w i n d o w . w e b k i t R e q u e s t A n i m a t i o n F r a m e   | |   w i n d o w . m o z R e q u e s t A n i m a t i o n F r a m e   | |   w i n d o w . o R e q u e s t A n i m a t i o n F r a m e   | |   w i n d o w . m s R e q u e s t A n i m a t i o n F r a m e   | |   f u n c t i o n ( f u n c )   { 
             w i n d o w . s e t T i m e o u t ( f u n c ,   1 0 0 0   /   4 0 ) ; 
         } ,   r a n d o m   =   M a t h . r a n d o m , 
         c u r r e n t _ p o i n t   =   { 
             x :   n u l l ,   / /_SRM� h x 
             y :   n u l l ,   / /_SRM� h y 
             m a x :   2 0 0 0 0   / /  WSJ_�v�^se� 
         } , 
         a l l _ a r r a y ; 
     t h e _ c a n v a s . i d   =   c a n v a s _ i d ; 
     t h e _ c a n v a s . s t y l e . c s s T e x t   =   " p o s i t i o n : f i x e d ; t o p : 0 ; l e f t : 0 ; z - i n d e x : "   +   c o n f i g . z   +   " ; o p a c i t y : "   +   c o n f i g . o ; 
     g e t _ b y _ t a g n a m e ( " b o d y " ) [ 0 ] . a p p e n d C h i l d ( t h e _ c a n v a s ) ; 
   
     / /RY�Su;^Y'\ 
     s e t _ c a n v a s _ s i z e ( ) ; 
     w i n d o w . o n r e s i z e   =   s e t _ c a n v a s _ s i z e ; 
     / /_Se�� hOMn[XP��y�_ v�e�P���e>_SRMOMnO�`o 
     w i n d o w . o n m o u s e m o v e   =   f u n c t i o n ( e )   { 
         e   =   e   | |   w i n d o w . e v e n t ; 
         c u r r e n t _ p o i n t . x   =   e . c l i e n t X ; 
         c u r r e n t _ p o i n t . y   =   e . c l i e n t Y ; 
     } ,   w i n d o w . o n m o u s e o u t   =   f u n c t i o n ( )   { 
         c u r r e n t _ p o i n t . x   =   n u l l ; 
         c u r r e n t _ p o i n t . y   =   n u l l ; 
     } ; 
     / /��g:ub c o n f i g . nga~�OMnO�`o 
     f o r   ( v a r   r a n d o m _ p o i n t s   =   [ ] ,   i   =   0 ;   c o n f i g . n   >   i ;   i + + )   { 
         v a r   x   =   r a n d o m ( )   *   c a n v a s _ w i d t h ,   / /��g:OMn 
             y   =   r a n d o m ( )   *   c a n v a s _ h e i g h t , 
             x a   =   2   *   r a n d o m ( )   -   1 ,   / /��g:��R�e�T 
             y a   =   2   *   r a n d o m ( )   -   1 ; 
         / /  ��g:p� 
         r a n d o m _ p o i n t s . p u s h ( { 
             x :   x , 
             y :   y , 
             x a :   x a , 
             y a :   y a , 
             m a x :   6 0 0 0   / /l��D��y� 
         } ) ; 
     } 
     a l l _ a r r a y   =   r a n d o m _ p o i n t s . c o n c a t ( [ c u r r e n t _ p o i n t ] ) ; 
     / / 0 . 1y�T~�R6 
     s e t T i m e o u t ( f u n c t i o n ( )   { 
         d r a w _ c a n v a s ( ) ; 
     } , 1 0 0 ) ; 
 } ( ) ; 
 < ! - -Qh<R�`��fo~�g_ - - > 
 < ! - - P a g e B e g i n H t m l   B l o c k   E n d - - >                              �jscr  ��ޭ