# type-iorm
QueryPart
    SelectFieldOrAsterisk
        SelectField
    FieldOrRow
        Field
    Statement
        Query
            StoreQuery
                
            Insert
                InsertFinalStep
                    InsertValuesStep
                InsertQuery
            Update
                UpdateFinalStep
                    UpdateConditionStep
                        UpdateWhereStep
            Delete
                DeleteFinalStep
                    DeleteConditionStep
                        DeleteWhereStep
            ResultQuery
                Select
                    SelectFinalStep
                        ISelectUnionStep
                        SelectOptionStep
                            SelectForUpdateStep
                                SelectLimitStep
                                    SelectOrderByStep
                                        SelectHavingConditionStep
                                        SelectHavingStep
                                            SelectGroupByStep
                                                SelectWhereStep
                                                    SelectJoinStep
                                                        SelectOnConditionStep
                                                    SelectFromStep
                                                        SelectIntoStep
                                                            SelectSelectStep
                                                
 
