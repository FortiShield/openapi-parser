import { describe, expect, it } from 'vitest'

import { resolve } from '../../../../src'
import server_enum_unknown from './server_enum_unknown.yaml'

describe('server_enum_unknown', () => {
  it('returns an error', async () => {
    const result = await resolve(server_enum_unknown)

    // TODO: The message should return something related to the unknown enum value
    expect(result.errors?.[0]?.error).toBe(
      `: format must match format "uri-reference"`,
    )
    expect(result.valid).toBe(false)
  })
})
