import { zodResolver } from '@hookform/resolvers/zod'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'

import { Button } from './ui/button'
import { DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

// import { Container } from './styles';

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export const StoreProfileDialog: React.FC = () => {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  })
  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function doSubmit() {}

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className="space-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name" {...register('name')}>
              Nome
            </Label>
            <Input className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant={'ghost'}>
            Cancelar
          </Button>
          <Button type="submit" variant={'success'}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
