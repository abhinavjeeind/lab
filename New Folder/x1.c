#include <stdio.h>
#include <stdlib.h>
 

struct Node {
    int data;
    struct Node* next;
};

struct Node* newNode(int data) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = data;
    temp->next = NULL;
    return temp;
}


void insertEnd(struct Node** head, int data) {
    struct Node* temp = newNode(data);
    if (*head == NULL) {
        *head = temp;
        return;
    }
    struct Node* last = *head;
    while (last->next != NULL) {
        last = last->next;
    }
    last->next = temp;
}


void printList(struct Node* head) {
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}


void divideLinkedList(struct Node* head, struct Node** evenHead, struct Node** oddHead) {
    while (head != NULL) {
        if (head->data % 2 == 0) {
            insertEnd(evenHead, head->data);
        } else {
            insertEnd(oddHead, head->data);
        }
        head = head->next;
    }
}

int main() {
    int n;
    printf("Enter the number of elements in the linked list: ");
    scanf("%d", &n);

    struct Node* head = NULL;

    printf("Enter the elements of the linked list: ");
    for (int i = 0; i < n; i++) {
        int data;
        scanf("%d", &data);
        insertEnd(&head, data);
    }

    printf("Original linked list: ");
    printList(head);

    struct Node* evenHead = NULL;
    struct Node* oddHead = NULL;

    divideLinkedList(head, &evenHead, &oddHead);

    printf("Even linked list: ");
    printList(evenHead);

    printf("Odd linked list: ");
    printList(oddHead);

    return 0;
}