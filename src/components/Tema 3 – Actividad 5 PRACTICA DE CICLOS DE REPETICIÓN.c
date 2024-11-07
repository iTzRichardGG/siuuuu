#include <stdio.h>

int main () {

    int dia, mes, año;

    printf("Ingrese el dia:  \n");
    scanf("%d", &dia);

    printf("Ingrese el mes:  \n");
    scanf("%d", &mes);

    printf("Ingrese el año:  \n");  
    scanf("%d", &año);

    if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && año > 0) {
        printf("La fecha es incorrecta\n");

        return 0;
    }  

    


}

