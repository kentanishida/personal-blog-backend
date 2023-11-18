import { ValidationError } from 'src/errors/errors'
import { ValidateService } from './validation'

describe('ValidateService', () => {
  const validateService = new ValidateService()

  describe('isUuid', () => {
    it('should return empty error array for valid UUIDs', () => {
      const validUuids = {
        id1: '123e4567-e89b-12d3-a456-426655440000',
        id2: '123e4567-e89b-12d3-a456-426655440001',
      }
      const errors = []

      const result = validateService.isUuid({ args: validUuids, errors })

      expect(result).toEqual([])
    })

    it('should return an error array for invalid UUIDs', () => {
      const invalidUuids = {
        id1: 'invalid-uuid',
        id2: 'another-invalid-uuid',
      }
      const errors = []

      const result = validateService.isUuid({ args: invalidUuids, errors })

      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toBeInstanceOf(ValidationError)
      expect(result[0].message).toContain(
        'id1 : invalid-uuid is not uuid format',
      )
    })
  })
})
