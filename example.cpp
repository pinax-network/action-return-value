#include <eosio/eosio.hpp>

using namespace eosio;

class [[eosio::contract]] example : public contract {
    public:
    using contract::contract;

    struct custom {
        std::string      message;
        std::string      extra;
    };

    // Checks the input param `message` and returns serialized std::string instance.
    [[eosio::action]]
    std::string returnvalue( const name message )
    {
        // the `set_action_return_value` intrinsic is invoked automatically
        if (message == "hello"_n) return "Validation has passed.";
        return "Input param `message` not equal to `hello`.";
    }

    [[eosio::action]]
    example::custom customvalue( const std::string message )
    {
        return custom{message, "extra message"};
    }

    [[eosio::action]]
    uint64_t numbervalue( const name message )
    {
        return 123;
    }

    [[eosio::action]]
    name namevalue( const name message )
    {
        return message;
    }

    [[eosio::action]]
    std::vector<std::string> vectorvalue( const std::string message )
    {
        return {message, "second", "third"};
    }

    using returnvalue_action = action_wrapper<"returnvalue"_n, &example::returnvalue>;
    using customvalue_action = action_wrapper<"customvalue"_n, &example::customvalue>;
};
