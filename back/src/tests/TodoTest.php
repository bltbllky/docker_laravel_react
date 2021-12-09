<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

class TodoTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGet()
    {
        $response = $this->call('GET', '/');

        $this->assertEquals(200, $response->status());
    }

    public function testCreate()
    {
        $response = $this->call('POST',
                                '/',
                                [
                                    'name'=>'testCase',
                                    'status'=>'1'
                                ]
                                );

        $this->assertEquals(
            200, $response->status()
        );
    }
}
