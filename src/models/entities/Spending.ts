class Spending {
    id: number;
    label: string;
    amount : number;
    category : Category;
    description: string;
    documentPath: string;
    dateCreated: Date;
    dateSpending: Date;

    constructor(id: number, label: string, amount: number, category: Category, description: string, documentPath: string, dateCreated: Date, dateSpending: Date) {
        this.id = id;
        this.label = label;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.documentPath = documentPath;
        this.dateCreated = dateCreated;
        this.dateSpending = dateSpending;
    }
}

export default Spending;