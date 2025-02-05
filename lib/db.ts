import sql from 'mssql'

const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  server: process.env.SQL_SERVER!,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function executeStoredProcedure<T>(
  procedureName: string, 
  params: any
): Promise<T> {
  try {
    const pool = await sql.connect(sqlConfig)
    
    const request = pool.request()
    request.input('pIn', sql.NVarChar(sql.MAX), JSON.stringify(params))
    request.output('pOut', sql.NVarChar(sql.MAX))

    const result = await request.execute(procedureName)
    const output = result.output.pOut

    await pool.close()

    return JSON.parse(output)
  } catch (err) {
    console.error('SQL Error:', err)
    throw new Error('Database error occurred')
  }
}