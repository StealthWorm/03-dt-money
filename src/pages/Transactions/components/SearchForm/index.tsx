import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { memo, useCallback, useState } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )

  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const handleSearchTransactions = useCallback(
    async (data: SearchFormInputs) => {
      try {
        setError(null)
        await fetchTransactions(data.query)
        reset()
      } catch (error) {
        setError('Error searching transactions')
        console.error('Error searching transactions:', error)
      }
    },
    [fetchTransactions, reset],
  )

  // console.log('renderizou')

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        aria-label="Search transactions"
      />

      <button type="submit" disabled={isSubmitting} aria-label="Search">
        <MagnifyingGlass size={20} />
        {isSubmitting ? 'Buscando...' : 'Buscar'}
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
