/*
* Linked List is a data-structure like array
* It's more dynamic than fixed array
* Its structure like HEAD => [Data,Next] => [Data,Next] => [Data,Next] => [Data,Next] => NULL
* This name [Data,Next] is NODE, So Linked_List has many elements or NODES
*                   HEAD is the first NODE of the linked list
*                   Next can be Link or Pointer
* Without HEAD NODE, You can't handle Linked List,
* Types of Linked List are 3 => Single, Double, Circular Linked List
* ===================
** Linked List has Advantages and DisAdvantages
 * Advantages like: (Dynamic) So, No need shifting of elements whenever new or delete Ele but fixed array does
*
* Disadvantages like: (random access is not possible) like you can't do array[6] = "hi";
*                   but in linked list you need to start from the beginning (HEAD) and access NODES sequentially
*                   So, If millions of Elements, DO NOT USE linked list
*                 # (Linked List needs Extra memory space for every NODE) So linked list contains [Data,Pointer]
*                    unlike fixed array that has only data (It's not a problem with big memories now a day)
*
*
* Build Node and Linked List Classes
* Insert( first, last, At position)
* Traverse/Display()
* Count()
* Search()
* Delete( first, last , specific item)
* Merge
*/
public class Single_Linked_List {
    NODE head;
//    Methods
    public void insertFirst(int item){}
    public void append(int item){}
    public void insertAtPosition(int item, int position){}
    public void traverse(){}
    public void delete(int item){}

    public Single_Linked_List(String data){
        System.out.print(data);
    }

    public static void main(String[] args){
        Single_Linked_List x = new Single_Linked_List("hello");
    }
}

class NODE {
    //    to make instances of [data, next] that node will point to another node [data, next] and So and So
    int data; //not generic (flexible) data type and must be int
    NODE next; //pointer
}